// All the modules 

const express = require('express')
const nodemailer = require("nodemailer");

const app = express()
const port = process.env.PORT || 8080

app.use(express.static('View'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port} ...... `))