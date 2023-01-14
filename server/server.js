const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require("dotenv").config();
const app = express();
app.use(cors())
app.use(express.json());


app.post(`/api/form`, (req, res) => {

    let data = req.body;
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        }

    });

    let mailOptions = {
        from: data.email,
        to: 'tudortodea1415@gmail.com',
        subject: `Message from ${data.firstName}`,
        html: `
        <h3>Informations</h3>
        <ul>
        <li>Name: ${data.firstName}</li>
        <li>LastName: ${data.lastName}</li>
        <li>Email: ${data.email}</li>
        <li>Phone: ${data.phone}</li>
        </ul>

        <h3>Message</h3>
        <p>${data.message}</p>
        `
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
        if (error) {
            res.send(error)
        } else {
            res.send('Success')
        }
    })
    smtpTransport.close();
})

const server = app.listen(5000, '0.0.0.0', () => {
    console.log(`Server started on Port 5000 `)
})