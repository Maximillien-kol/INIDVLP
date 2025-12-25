import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, phone, company, services, message } = body

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Create transporter with SMTP settings
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        })

        // Email recipients
        const recipients = [
            'k.bagira@ini.rw',
            's.bagira@ini.rw',
            'contact@ini.rw',
        ]

        // Email content
        const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1C1C1C; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #1C1C1C; margin-bottom: 5px; }
            .value { padding: 10px; background-color: white; border-left: 3px solid #1C1C1C; }
            .services-list { list-style: none; padding: 0; }
            .services-list li { padding: 5px 0; padding-left: 20px; position: relative; }
            .services-list li:before { content: "✓"; position: absolute; left: 0; color: #1F7A5A; font-weight: bold; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
              <p>INI Development Website</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>

              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>

              ${phone ? `
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${phone}</div>
                </div>
              ` : ''}

              ${company ? `
                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">${company}</div>
                </div>
              ` : ''}

              ${services && services.length > 0 ? `
                <div class="field">
                  <div class="label">Services Interested In:</div>
                  <div class="value">
                    <ul class="services-list">
                      ${services.map((service: string) => `<li>${service}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              ` : ''}

              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the INI Development contact form</p>
              <p>Received: ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Kigali' })} (Kigali Time)</p>
            </div>
          </div>
        </body>
      </html>
    `

        const textContent = `
New Contact Form Submission - INI Development

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${company ? `Company: ${company}` : ''}
${services && services.length > 0 ? `\nServices Interested In:\n${services.map((s: string) => `- ${s}`).join('\n')}` : ''}

Message:
${message}

---
Received: ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Kigali' })} (Kigali Time)
    `

        // Send email to all recipients
        await transporter.sendMail({
            from: `"INI Development Website" <${process.env.SMTP_USER}>`,
            to: recipients.join(', '),
            replyTo: email,
            subject: `New Contact Form: ${name} - ${services && services.length > 0 ? services[0] : 'General Inquiry'}`,
            text: textContent,
            html: htmlContent,
        })

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        )
    }
}
