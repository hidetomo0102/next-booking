import { createTransport, Transporter } from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPConnection, {
  AuthenticationType,
} from "nodemailer/lib/smtp-connection";
import SMTPTransport from "nodemailer/lib/smtp-transport";

interface SendEmailOptions {
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (options: SendEmailOptions): Promise<any> => {
  const auth: AuthenticationType = {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  };

  const createTransportOption: SMTPConnection.Options = {
    host: process.env.SMTP_HOST,
    port: Number(String(process.env.SMTP_HOST)),
    auth: auth,
  };

  const transporter: Transporter<SMTPTransport.SentMessageInfo> =
    createTransport(createTransportOption);

  const message: Mail.Options = {
    from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(message);
};
