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

    return NextResponse.json({ success: true, data })
  } catch (err: any) {
    console.error("[v0] API error:", err)
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 })
  }
}
