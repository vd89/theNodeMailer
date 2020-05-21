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
  
  transporter.sendMail({
    from:`"Dax Code Solutions" <${config.get('emailConfig.userName')}>` ,
    to:`${email}`,
    subject: "The Copy of the feedback form filled on Dax Code Solutions",
    html: `
    <h1>Hello , ${name}</h1>
    <br>
    <p>Thanks for the feedback form filled by you your feedback is valuable information for yous.</p>
    `,
  }).then((info) => {
    console.log("Message sent: %s", info.messageId);
    res.send(`<h1>Thank you </h1> <br> <P> An email has been send to your account  </p> `) 
  }).catch((err) => {
    console.log(err);
    res.send(`<h1> Something wend Wrong and we will get back soon</h1>`)
  });

}




module.exports = sendEmail
