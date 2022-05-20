import nodemailer from 'nodemailer';

export default async (req, res) => {
  try {
    if (req.method === 'POST') {
      const { gitHubUsername } = req.body;

      const transporter = await nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: '8BITS-COLAB',
        to: '8bits.colab@gmail.com',
        subject: 'Be a member',
        html: `
          <div style="background-color: #fafafa; padding: 16px; border-radius: 8px; border: 1px solid #000;">
            <h1>Be a member</h1>
            <p>${gitHubUsername} requested to be a member!</p>
            <a href="https://github.com/${gitHubUsername}" target="_blank"style="margin-top: 16px; text-decoration: none; color: #fff; background: #000; padding: 8px; border-radius: 5px;"> Profile </a>
          </div>
        `,
      });

      return res.sendStatus(200);
    }
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};
