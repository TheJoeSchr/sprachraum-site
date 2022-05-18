// read .env file if present, use only locally for debug
require('dotenv').config()
const { marked } = require('marked')

function substituteTemplateLiterals(textIncludingLiterals, dictReplacements) {
  const regExForTemplateLiterals = /\${([^}]+)}/g // ${key}
  const result = textIncludingLiterals.replace(
    regExForTemplateLiterals,
    (match, p1) => {
      const [key, ...rest] = p1.split('.') // key.subkey.subsubkey
      // replace with keyValue or empty string
      return dictReplacements.hasOwnProperty(key) ? dictReplacements[key] : ''
    }
  )
  // console.log('Debug substituteTemplateLiterals()', result)
  return result
}

function mailSubject({ name, ...formData }) {
  return `SPRACHRAUM: Anmeldung für ${name}`
}

// MAIN FUNCTIONS
exports.handler = function (event, context, callback) {


  // Parse data sent in form hook (email, name etc)
  const { data: formData } = JSON.parse(event.body).payload
  if (!formData || !formData.email) {
    return callback(null, {
      statusCode: 400,
      body: 'Mailing details not provided',
    })
  }

  let transporter = mailAuth()

  let userMailOptions = generateUserEmail(formData)

  transporter.sendMail(userMailOptions, (error, info) => {
    // handle errors
    if (error) {
      console.error('sendMail error:', error)
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify(error),
      })
    }

    // success!
    console.info('sendMail success', info)
    callback(null, {
      statusCode: 200,
      body: 'mail sent:\n' + JSON.stringify(info),
    })
  })
}

function mailAuth() {
  const nodemailer = require('nodemailer')
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS
  return nodemailer.createTransport({
    host: 'smtppro.zoho.eu',
    port: 587,
    auth: {user, pass},
  })
}

function generateUserEmail(formData) {
  const fs = require('fs')
  const path = require('path')

  // and passing the path to the file
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
  const parsedHTML = marked.parse(fileContent)
  let mailOptions = {
    from: 'post@workitaut.at',
    to: formData.email,
    replyTo: 'post@workitaut.at',
    subject: mailSubject(formData),
    html: substituteTemplateLiterals(parsedHTML, formData),
  }
  return mailOptions
}

