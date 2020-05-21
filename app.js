// All the modules 

const express = require('express')
const nodemailer = require("nodemailer");
const sendEmail = require('./Controller/emailer')

const app = express()
const port = process.env.PORT || 8888

app.use(express.static('View'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.post('/post',(req,res) => {
  // console.log(req.body);
  let {name,email} = req.body
  sendEmail(name,email)
  res.end()
})


app.listen(port, () => console.log(`Example app listening on port ${port} ...... `))



