// All the modules 

const express = require('express')
const nodemailer = require("nodemailer");

const app = express()
const port = process.env.PORT || 8080

app.use(express.static('View'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.post('/post',(req,res) => {
  console.log(req.body);
  res.send(`<h1>Thank you </h1> <br> <P> An email has been send to your account  </p> `)
  res.end()
})


app.listen(port, () => console.log(`Example app listening on port ${port} ...... `))