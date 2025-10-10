import { NextResponse } from "next/server"
import { Resend } from "resend"
import { emailConfig } from "@/lib/config"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, companyName, industry, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const bccList =
      typeof emailConfig.bccEmails === "string" && emailConfig.bccEmails.length > 0
        ? emailConfig.bccEmails.split(",")
        : undefined

    // 1️⃣ Send the email
    const data = await resend.emails.send({
      from: emailConfig.fromEmail,
      to: emailConfig.recipientEmail,
      subject: emailConfig.subject,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${companyName ? `<p><strong>Company:</strong> ${companyName}</p>` : ""}
        ${industry ? `<p><strong>Industry:</strong> ${industry}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      ...(bccList ? { bcc: bccList } : {}),
    })

    // 2️⃣ Add contact to Resend Audience (general email list)
    if (process.env.RESEND_AUDIENCE_ID) {
      try {
        await resend.contacts.create({
          audienceId: process.env.RESEND_AUDIENCE_ID,
          email,
          firstName: name.split(" ")[0],
          lastName: name.split(" ").slice(1).join(" ") || undefined,
        })
      } catch (contactErr: any) {
        console.error("[v0] Resend contact error:", contactErr)
        // We don’t throw here — failing to add to contacts shouldn’t block email sending
      }
    }

    return NextResponse.json({ success: true, data })
  } catch (err: any) {
    console.error("[v0] API error:", err)
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 })
  }
}
