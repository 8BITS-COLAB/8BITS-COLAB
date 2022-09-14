import { Mailer } from '@elioenaiferrari/dachshund-js';

export default async (req, res) => {
  try {
    if (req.method === 'POST') {
      const { gitHubUsername } = req.body;

      const mailer = new Mailer('VM3E2XAP2PIHOKTXML7R3WOPDJOTKUT3');
      await mailer.send({
        template: 'default',
        context: {
          body: {
            subject: 'Be a member',
            title: `${gitHubUsername} - Be a member`,
            description: `A new request to be part of the team has arrived. Welcome and keep contributing!\nProfile: https://github.com/${gitHubUsername}`,
          },
          to: {
            name: '8bits',
            email: '8bits.colab@gmail.com',
          },
        },
      });

      return res.sendStatus(200);
    }
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};
