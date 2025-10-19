// Email configuration for Resend API
export const emailConfig = {
  // The email address that will receive form submissions
  recipientEmail: process.env.RESEND_TO_EMAIL || "",

  // The "from" email address (must be verified in Resend)
  fromEmail: process.env.RESEND_FROM_EMAIL || "",

  // Email subject line for contact form submissions
  subject: "New Contact Form Submission - ProteusX AI",

  // Optional: BCC email addresses (comma-separated)
  bccEmails: "",
} as const

// You can easily update these values to customize your email settings
