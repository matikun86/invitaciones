const nodemailer = require('nodemailer');

const EMAIL_FROM = 'confirmacionescasamiento@gmail.com';
const EMAIL_TO = 'yfarulla@gmail.com,enzotranier@gmail.com';
const EMAIL_CC = 'matiasfarulla@gmail.com';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_FROM,
    pass: process.env.PASSWORD
  }
});

module.exports = (options) => {
    const mailOptions = {
        from: EMAIL_FROM,
        to: EMAIL_TO,
        cc: EMAIL_CC,
        subject: 'Confirmacion casamiento',
        text: `${options.name} (${options.email}) dijo que ${options.options} va y escribió: \n${options.message}`,
    };

    return transporter.sendMail(mailOptions).then(function(error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
};