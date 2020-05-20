const nodeMailer = require('nodemailer');
const config = require('config');

const sendMail = (name,email) => {
  
  let transporter = nodeMailer.createTestAccount({
    host: config.get('emailConfig.host'),
    port: config.get('emailConfig.port'),
    secure: true,
    auth:{
      user: config.get('emailConfig.userName'),
      pass: config.get('emailConfig.password'),
    }
  })

  let info = transporter.sendMail({
    from: `"Dax Code Solutions" <${config.get('emailConfig.userName')}>` ,
    to:`${email}`,
    subject: "The Copy of the feedback form filled on Dax Code Solutions",
    html: ``,
  })

}




module.exports = sendMail
