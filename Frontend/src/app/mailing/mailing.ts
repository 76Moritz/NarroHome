import FormData from "form-data"; // form-data v4.0.1
import Mailgun from "mailgun.js"; // mailgun.js v11.1.0

 export async function sendSimpleMessage(subject:string,text:string) {
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key:  process.env["MAILGUN_API_KEY"] as string,
    // When you have an EU-domain, you must specify the endpoint:
    // url: "https://api.eu.mailgun.net"
  });
  try {
    const data = await mg.messages.create("sandbox289b1238590943aca464ab92b5f8f548.mailgun.org", {
      from: "Narrogruppe-Oberkirch<root@sandbox289b1238590943aca464ab92b5f8f548.mailgun.org>",
      to: ["Moritz Binder <moritz.binder03@gmail.com>"],
      subject: subject,
      text: text,
    });

    console.log(data); // logs response data
  } catch (error) {
    console.log(error); //logs any error
  }
}