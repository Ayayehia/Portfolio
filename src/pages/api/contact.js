import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, subject, message } = req.body

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: 'your-email@gmail.com',
      to: 'ayanader8@gmail.com', // your target email address
      subject: `New Contact: ${subject}`,
      text: `From: ${fullName}\n\n${message}`,
    })

    console.log('Message sent: %s', info.messageId)

    res.status(200).json({ success: true })
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}
