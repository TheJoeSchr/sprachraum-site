// read .env file if present, use only locally for debug
require('dotenv').config()
const { marked } = require('marked')

function formToMail({ name, description, days }, body) {
  html = `${body}` //deep copy string
  //TODO: add cost and tagline?
  html = html.replaceAll('${name}', name)
  html = html.replaceAll('${description}', description)
  html = html.replaceAll('${days}', days)
  html = html.replaceAll('${cost}', cost)
  html = html.replaceAll('${tagline}', tagline)
  // console.log('Debug html:', html)
  return html
}

function mailSubject({ name, description, days }) {
  return `SPRACHRAUM: Anmeldung für ${name}:${description}, ${days}`
}

exports.handler = function (event, context, callback) {
  // Parse data sent in form hook (email, name etc)
  const { data } = JSON.parse(event.body).payload

  // using the readFileSync() function
  // and passing the path to the file
  const fs = require('fs')
  const path = require('path')

  const buffer = fs.readFileSync(path.join(__dirname, 'EmailUser.md'), {
    encoding: 'utf-8',
  })

  // use the toString() method to convert
  // Buffer into String
  const fileContent = buffer.toString()
  // console.log(fileContent)
  // Set options
  marked.setOptions({
    gfm: true,
    breaks: true,
    sanitize: true,
    smartLists: true,
    smartypants: false,
  })
  const body = marked.parse(fileContent)
  // console.log('Debug log:\n', data)
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
  // console.log('Debug auth', { user, pass }) // TODO:

  let transporter = nodemailer.createTransport({
    host: 'smtppro.zoho.eu',
    port: 587,
    auth: { user, pass },
  })

  let formData = { ...data }
  let mailOptions = {
    from: 'post@workitaut.at',
    to: data.email, // send to email from contact form
    replyTo: 'post@workitaut.at',
    subject: mailSubject(formData),
    html: formToMail(formData, body),
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

    console.info('sendMail success', info)
    // success!
    callback(null, {
      statusCode: 200,
      body: 'mail sent:\n' + JSON.stringify(data),
    })
  })
}
