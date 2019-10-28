/* eslint-disable no-console */
require('dotenv').config();

const mailgun = require('mailgun-js');

const sendMail = ({
  name, email, message, res,
}) => {
  const mg = mailgun({
    apiKey: process.env.API_KEY,
    domain: process.env.DOMAIN_NAME,
  });

  const data = {
    from: `${name} ${email}`,
    to: 'kevoesegbona@gmail.com',
    subject: 'New Mail from hire my service',
    text: message,
  };
  return mg.messages().send(data, (error) => {
    if (error) {
      return res.status(400).send({
        message: 'Message not sent. Something went wrong',
      });
    }

    return res.status(200).send({
      message: `Message sent successfully. Thank you ${name} for reaching out.`,
    });
  });
};

const isValid = (name, value) => {
  const required = {
    fullName: /^[a-zA-Z '.-]{3,30}$/,
    email: /^\w+@[\w]{2,20}.[a-z]{2,10}$/i,
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

const mailer = (req, res) => {
  const { fullName, email, message } = req.body;
  try {
    sendMail({
      name: fullName,
      message,
      email,
      res,
    });
  } catch (error) {
    res.status(500).send({
      message: 'Message not sent. Something went wrong',
    });
  }
};

module.exports = { mailer, validateRequest };
