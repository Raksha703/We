import nodemailer from "nodemailer";

interface EmailOptions {
  email: string;
  subject: string;
  message: string;
}

export default async function sendEmail(options: EmailOptions) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "wecare.reset@gmail.com",
      pass: "bejhnimxslfzzoew",
    },
  });

  const message = {
    from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
    to: options.email,
    subject: "WeCare",
    html: options.message,
  };

  await transporter.sendMail(message);
}
