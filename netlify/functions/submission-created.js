// read .env file if present, use only locally for debug
require('dotenv').config()
const { marked } = require('marked')

function formToMail({ name, description, days }) {
  return encodeURIComponent(
    `KURSTITEL /  CORSO <br> ${name}<br> ${description}<br> ${days}<br>`
  )
}

function mailSubject({ name, description, days }) {
  return `Anmeldung für ${name}:${description}, ${days}`
}

function mailtoFn(course) {
  const EMAIL = this.messages.btnBookingEmail
  return `mailto:${EMAIL}?subject=${mailSubject(course)}&body=${formToMail(
    course
  )}`
}
exports.handler = function (event, context, callback) {
  // Parse data sent in form hook (email, name etc)
  const { data } = JSON.parse(event.body).payload

  // using the readFileSync() function
  // and passing the path to the file
  const fs = require('fs')
  const path = require('path')

  const buffer = fs.readFileSync(
    path.join(__dirname, 'templates/EmailUser.md'),
    { encoding: 'utf-8' }
  )

  // use the toString() method to convert
  // Buffer into String
  const fileContent = buffer.toString()
  console.log(fileContent)
  // Set options
  marked.setOptions({
    gfm: true,
    breaks: true,
    sanitize: true,
    smartLists: true,
    smartypants: false,
  })
  const body = marked.parse(fileContent)
  console.log('Debug log:\n', data)
  // make sure we have data and email
  if (!data || !data.email) {
    return callback(null, {
      statusCode: 400,
      body: 'Mailing details not provided',
    })
  }
  const nodemailer = require('nodemailer')
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS
  console.log('Debug auth', { user, pass }) // TODO:

  let transporter = nodemailer.createTransport({
    host: 'smtppro.zoho.eu',
    port: 587,
    auth: { user, pass },
  })

  let formData = {}
  let mailOptions = {
    from: 'post@workitaut.at',
    to: data.email, // send to email from contact form
    replyTo: 'post@workitaut.at',
    subject: mailSubject(formData),
    html: formToMail(formData) + body,
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
