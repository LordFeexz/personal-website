import type { SendMailProps } from "@/interfaces/email";
import { createTransport, type SendMailOptions } from "nodemailer";

class Mailer {
  private transport = createTransport({
    host: "smtp.gmail.com",
    tls: {
      rejectUnauthorized: false,
    },
    debug: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  public async sendEmail({ to, html, text }: SendMailProps) {
    const opts: SendMailOptions = {
      from: process.env.EMAIL,
      to,
      html,
      text,
    };

    this.transport.verify().then(() => {
      this.transport.sendMail(opts, (err, resp) => {
        if (err) throw err;
        console.info(resp.response);
      });
    });
  }
}

export default new Mailer();
