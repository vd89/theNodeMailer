const nodemailer = require("nodemailer");
const config = require('config');

const sendEmail = (name,email) => {
  
  let transporter = nodemailer.createTransport({
    host: config.get('emailConfig.host'),
    port: config.get('emailConfig.port'),
    secure: true,
    auth:{
      user: config.get('emailConfig.userName'),
      pass: config.get('emailConfig.password'),
    }
  });
  
  let info = transporter.sendMail({
    from:`"Dax Code Solutions" <${config.get('emailConfig.userName')}>` ,
    to:`${email}`,
    subject: "The Copy of the feedback form filled on Dax Code Solutions",
    html: `
    <h1>Hello , ${name}</h1>
    <br>
    <p>Thanks for the feedback form filled by you your feedback is valuable information for yous.</p>
    `,
  });
  console.log("Message sent: %s", info.messageId);

}




module.exports = sendEmail
