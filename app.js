// All the modules 

const express = require('express')
const nodemailer = require("nodemailer");
const sendEmail = require('./Controller/emailer')

const app = express()
const port = process.env.PORT || 8080

app.use(express.static('View'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.post('/post',(req,res) => {
  // console.log(req.body);
  let {name,email} = req.body
  sendEmail(name,email)
  res.send(`<h1>Thank you </h1> <br> <P> An email has been send to your account  </p> `)
  res.end()
})


app.listen(port, () => console.log(`Example app listening on port ${port} ...... `))

// [Object: null prototype] {
//   name: 'Dixit Vora',
//   zipCode: '360005',
//   email: 'daxcode89@gmail.com',
//   phone: '+919725625029',
//   message: 'this is some thext'
// }

