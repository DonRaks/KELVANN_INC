import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * -----------------------------------------------------------------------------
 * Type Definitions & Contracts
 * -----------------------------------------------------------------------------
 */

/**
 * Interface representing the validated payload received from the contact form.
 */
interface ContactInquiryPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

/**
 * Recipient routing configuration based on business rules.
 */
interface EmailRouting {
  primaryRecipient: string;
  ccRecipient: string;
}

/**
 * -----------------------------------------------------------------------------
 * Constants & Business Logic Defaults
 * -----------------------------------------------------------------------------
 */
const CORPORATE_EMAILS = {
  PARENT_GROUP: "Kelvanngroup@gmail.com",
  KRYSTAL_SUBSIDIARY: "Kelvannkrystal@gmail.com",
} as const;

/**
 * Evaluates the inquiry subject/topic to decide which inbox receives primary routing.
 * 
 * Technical detail:
 * Inquiries concerning the flagship subsidiary (Kelvann Krystal) or commercial
 * road paving partnerships are routed directly to the subsidiary mailbox,
 * while maintaining executive parent oversight via CC.
 *
 * @param subject - The subject line or category selected by the client.
 * @returns An object with primary and carbon-copy (CC) email addresses.
 */
function resolveEmailRouting(subject?: string): EmailRouting {
  const normalized = (subject || "").toLowerCase();
  const isKrystalTargeted =
    normalized.includes("krystal") ||
    normalized.includes("commercial partnership");

  return isKrystalTargeted
    ? {
        primaryRecipient: CORPORATE_EMAILS.KRYSTAL_SUBSIDIARY,
        ccRecipient: CORPORATE_EMAILS.PARENT_GROUP,
      }
    : {
        primaryRecipient: CORPORATE_EMAILS.PARENT_GROUP,
        ccRecipient: CORPORATE_EMAILS.KRYSTAL_SUBSIDIARY,
      };
}

/**
 * Generates responsive, brand-aligned HTML template for the email body.
 *
 * @param payload - Sanitized contact submission details.
 * @param routing - The primary and CC routing information.
 * @returns Formatted HTML string ready for email transmission.
 */
function buildCorporateEmailTemplate(
  payload: ContactInquiryPayload,
  routing: EmailRouting
): string {
  const { name, email, phone, subject, message } = payload;
  const safePhone = phone && phone.trim().length > 0 ? phone : "Not provided";

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Corporate Inquiry</title>
    </head>
    <body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; color: #142B4D;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border: 1px solid #e2e8f0;">
        
        <!-- Header: Corporate Branding -->
        <div style="background-color: #061b31; color: #ffffff; padding: 28px 24px; text-align: left;">
          <h1 style="margin: 0; font-size: 20px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; color: #ffffff;">
            New Corporate Inquiry
          </h1>
          <p style="margin: 6px 0 0; font-size: 13px; color: #00a6e0; font-weight: 600;">
            Kelvann Group of Companies Nigeria Limited
          </p>
        </div>

        <!-- Sender & Dispatch Details -->
        <div style="padding: 24px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
          <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
            <tr>
              <td style="padding: 6px 0; color: #64748b; font-weight: 600; width: 140px;">Sender Name:</td>
              <td style="padding: 6px 0; color: #142B4D; font-weight: 700;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Email Address:</td>
              <td style="padding: 6px 0;">
                <a href="mailto:${email}" style="color: #00a6e0; text-decoration: none; font-weight: 600;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Contact Phone:</td>
              <td style="padding: 6px 0; color: #142B4D; font-family: monospace;">${safePhone}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Subject Topic:</td>
              <td style="padding: 6px 0; color: #0f172a; font-weight: 700;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Target Route:</td>
              <td style="padding: 6px 0; color: #334155; font-size: 12px;">
                <strong>To:</strong> ${routing.primaryRecipient} <br/>
                <strong>CC:</strong> ${routing.ccRecipient}
              </td>
            </tr>
          </table>
        </div>

        <!-- Message Body Content -->
        <div style="padding: 24px;">
          <h2 style="margin: 0 0 12px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b;">
            Message Content
          </h2>
          <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${message}</div>
        </div>

        <!-- Footer / Security Disclaimer -->
        <div style="padding: 16px 24px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; text-align: center;">
          This message was securely transmitted via the official <strong>Kelvann Group</strong> web portal contact channel.
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * -----------------------------------------------------------------------------
 * API Route Handler: POST /api/contact
 * -----------------------------------------------------------------------------
 * Handles asynchronous form submissions from the client, validates required input,
 * determines mailbox routing, and either executes direct SMTP delivery or registers
 * a fallback development payload with a graceful client-side response.
 */
export async function POST(req: Request) {
  try {
    // 1. Parse and extract incoming JSON request
    const body = await req.json();
    const { name, email, phone, subject, message } = body ?? {};

    // 2. Validate mandatory fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields. Full name, valid email, and message are required.",
        },
        { status: 400 }
      );
    }

    // 3. Simple email format validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid email address format.",
        },
        { status: 400 }
      );
    }

    // 4. Resolve mail routing rules
    const sanitizedSubject = (subject || "General Corporate Inquiry").trim();
    const routing = resolveEmailRouting(sanitizedSubject);

    // 5. Check SMTP credentials from environment
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    const payload: ContactInquiryPayload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim(),
      subject: sanitizedSubject,
      message: message.trim(),
    };

    /**
     * PATH A: Live SMTP Active
     * If environment variables are supplied (e.g., in production or with .env.local),
     * initialize Nodemailer transporter pool and dispatch the email.
     */
    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
        // Pool connections to optimize memory and speed for concurrent inquiries
        pool: true,
        maxConnections: 3,
      });

      await transporter.sendMail({
        from: `"${payload.name} (Kelvann Portal)" <${smtpUser}>`,
        replyTo: payload.email,
        to: routing.primaryRecipient,
        cc: routing.ccRecipient,
        subject: `[Kelvann Inquiry] ${payload.subject}: ${payload.name}`,
        html: buildCorporateEmailTemplate(payload, routing),
      });

      return NextResponse.json(
        {
          success: true,
          sentDirectly: true,
          primaryRecipient: routing.primaryRecipient,
          ccRecipient: routing.ccRecipient,
          message: "Inquiry successfully transmitted to corporate mailboxes.",
        },
        { status: 200 }
      );
    }

    /**
     * PATH B: Development / Local Fallback (No SMTP configured yet)
     * Provides local observability in terminal without crashing the client flow.
     */
    console.info("-------------------------------------------------------");
    console.info("[KELVANN PORTAL] INQUIRY RECEIVED (SMTP NOT CONFIGURED)");
    console.info(`Timestamp:   ${new Date().toISOString()}`);
    console.info(`Sender:      ${payload.name} <${payload.email}>`);
    console.info(`Phone:       ${payload.phone || "N/A"}`);
    console.info(`Subject:     ${payload.subject}`);
    console.info(`Primary To:  ${routing.primaryRecipient}`);
    console.info(`CC:          ${routing.ccRecipient}`);
    console.info(`Message:     ${payload.message}`);
    console.info("-------------------------------------------------------");

    return NextResponse.json(
      {
        success: true,
        sentDirectly: false,
        primaryRecipient: routing.primaryRecipient,
        ccRecipient: routing.ccRecipient,
        message: `Inquiry successfully addressed to ${routing.primaryRecipient} (CC: ${routing.ccRecipient}).`,
      },
      { status: 200 }
    );
  } catch (error: any) {
    // 6. Graceful exception logging and standardized error response
    console.error("[KELVANN CONTACT API ERROR]:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error occurred while processing inquiry.",
        details: process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

