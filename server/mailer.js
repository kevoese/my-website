/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-console */
require('dotenv').config();

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendMail = ({
  name, email, message, res,
}) => {
  const msg = {
    to: email,
    from: 'kelvinesegbona@gmail.com',
    subject: `New Mail from hire my service. Email: ${email}`,
    text: message,
  };
  sgMail.send(msg, (err, result) => {
    if (err) {
      return res.status(200).send({
        message: 'Message not Sent. something went wrong',
        error: err.message,
      });
    }
    return res.status(200).send({
      message: `Message sent successfully. Thank you ${name} for reaching out.`,
      result: result.message,
    });
  });
};

const emailSender = ({
  name, email, message, personal,
}) => new Promise((res, rej) => {
  const msg = {
    to: email,
    from: 'kelvinesegbona@gmail.com',
    subject: personal ? 'Hire-my-service portfolio' : 'Kelvin From Hire-my-service',
    text: personal ? `
    Mail from ${email}
    ${message}
    ` : message,
  };
  console.log('====================================');
  console.log(msg);
  console.log('====================================');
  sgMail.send(msg, (err, result) => {
    if (err) {
      return rej({
        message: 'Message not Sent. something went wrong',
        error: err.message,
      });
    }
    return res({
      message: `Message sent successfully. Thank you ${name} for reaching out.`,
      result: result.message,
    });
  });
});

const isValid = (name, value) => {
  const required = {
    fullName: /^[a-zA-Z '.-]{3,50}$/,
    email: /^[\w.]+@[\w]{2,20}.[a-z]{2,30}$/i,
    message: /\w+/,
  };
  if (value && required[name].test(value)) return true;
  return false;
};

const validateRequest = (req, res, next) => {
  const { fullName, email, message } = req.body;
  if (!isValid('fullName', fullName) || !isValid('email', email) || !isValid('message', message)) {
    return res.status(400).send({
      message: 'Invalid information',
    });
  }
  req.body = {
    ...req.body, fullName: fullName.trim(), email: email.trim(), message: message.trim(),
  };
  return next();
};

const mailer = async (req, res) => {
  const { fullName, email, message } = req.body;
  try {
    await emailSender({
      name: fullName,
      email: 'kevoesegbona@gmail.com',
      message,
      personal: true,
    });

    const output = await emailSender({
      name: fullName,
      email,
      message: 'Message recieved. Thanks for Reaching out. You can contact me here https://www.linkedin.com/in/kelvin-esegbona-983b97110/',
    });

    res.send(output);
  } catch (error) {
    console.log('====================================');
    console.log(error.message);
    console.log('====================================');
    res.status(500).send({
      message: 'Message not sent. Something went wrong',
    });
  }
};

module.exports = { mailer, validateRequest };
