const nodemailer = require("nodemailer");

const createTransport = () => {
    const transport = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:'tommysaurio007@gmail.com',
            pass:'ndjtyqomnydgusyj',
        }
    });

    return transport;
}

const sendMail = async (user) => {
    const transporter = await createTransport();
    const info = await transporter.sendMail({
        from:'tommysaurio007@gmail.com',
        to:`${user.email}`,
        subject: `Hello ${user.username} Welcome to Mi Barrio Ciudadela's community`,
        html: '<h1>Hi there your registration has been succesfully received.</h1><br/><h5>We have sent you a copy of our menu, hope we see you soon to taste our burgers!<h5/>',
        attachments: [
            {   
                filename: 'license.txt',
                path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
            },
        ]
    })
    console.log("Message sent: %$", info.messageId);

    return
}

exports.sendMail = (user) => sendMail(user);