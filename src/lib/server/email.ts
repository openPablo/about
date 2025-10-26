import FormData from "form-data";
import Mailgun from "mailgun.js";

import { MAILGUN_API_KEY } from "$env/static/private";
import { MAILGUN_API_URL } from "$env/static/private";
import { MAILGUN_DOMAIN } from "$env/static/private";
import { MAIL_RECIPIENT } from "$env/static/private";

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: "api",
  key: MAILGUN_API_KEY,
  url: MAILGUN_API_URL
});

export async function sendContactformMail(sender: string, message: string) {
  sendMail(MAIL_RECIPIENT, `pabske.dev contact request by ${sender}`, message);
}
export async function sendConfirmationMail(sender: string, message: string) {
  sendMail(
    sender,
    "Contact form confirmation pabske.dev",
    `You've send pabske a contact request with the following message:\n ${message}`
  );
}

async function sendMail(to: string, subject: string, text: string) {
    const data = await mg.messages.create(MAILGUN_DOMAIN, {
      from: `Pabske <pabske@${MAILGUN_DOMAIN}>`,
      to: [to],
      subject: subject,
      text: text,
    })
    .then(msg => console.log(msg))
    .catch(err => console.error(err));
}
