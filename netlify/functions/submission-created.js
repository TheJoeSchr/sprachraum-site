// read .env file if present, use only locally for debug
require('dotenv').config()

exports.handler = function (event, context, callback) {
  // Parse data sent in form hook (email, name etc)
  const { data } = JSON.parse(event.body).payload

  console.log('Debug log:\n', data)
  // make sure we have data and email
  if (!data || !data.email) {
    return callback(null, {
      statusCode: 400,
      body: 'Mailing details not provided',
    }) }
  const nodemailer = require('nodemailer')
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS
  console.log('Debug auth', { user, pass }) // TODO:

  let transporter = nodemailer.createTransport({
    host: 'smtppro.zoho.eu',
    port: 587,
    auth: { user, pass },
  })

  let mailOptions = {
    from: 'do-not-reply@workitaut.at',
    to: data.email, // send to email from contact form
    subject: 'Contact submission received!',
    html: 'Your Email Body goes here with <b>Bold</bold>',
  }

  transporter.sendMail(mailOptions, (error, info) => {
    // handle errors
    if (error) {
      console.error('sendMail error:', error)
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify(error),
      })
    }

    console.info('sendMail success')
    // success!
    callback(null, {
      statusCode: 200,
      body: 'mail sent:\n' + JSON.stringify(data),
    })
  })
}
