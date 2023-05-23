let config
module.exports = (_config) => {
    config = _config
    return Mail
}


let Mail = class{
    static sendMail(body) {

        var nodemailer = require('nodemailer');

        var transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'OddityForm@outlook.fr',
            pass: 'Oddity1234'
        }
        });

        var mailOptions = {
        from: 'OddityForm@outlook.fr',
        to: 'floriangrazina@gmail.com',
        subject: `Message du formailre - ${body["subject"]}`,
        text: `Nom: ${body["name"]}\nEmail: ${body["email"]}\nNumero de tel: ${body["phone"]}\nMessage: ${body["message"]}`
        };

        return new Promise((next) => {
            transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                next("no");
            } else {
                console.log('Email sent: ' + info.response);
                next("ok");
            }
            });
        })
    }
}