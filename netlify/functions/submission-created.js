const ADMIN_EMAIL = 'post@workitaut.at'
const NOTIFICATION_EMAIL = 'elke@workitaut.at'
const BOT_EMAIL = process.env.EMAIL_USER
const check_debug = () => 'develpment' == process.env.NODE_ENV
const IS_DEBUG = check_debug()
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

  let userMailOptions = generateCustomerEmail(formData)
  let adminMailOptions = generateNotificationEmail(formData)
  transporter.sendMail(adminMailOptions, (error, info) => {
    // handle errors
    if (error) {
      console.error('ADMIN: sendMail error:', error)
    }

    // success!
    console.log('ADMIN: sendMail success', info)
  })

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
  // read .env file if present, use only locally for debug
  require('dotenv').config()
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS
  return nodemailer.createTransport({
    host: 'smtppro.zoho.eu',
    port: 587,
    auth: { user, pass },
  })
}

function generateCustomerEmail(formData) {
  if (IS_DEBUG) {
    printDirTree()
  }
  return generateEmail('it/EmailOrderCustomer.md', {
    formData,
    from: BOT_EMAIL,
    replyTo: ADMIN_EMAIL,
    subject: mailSubjectCustomer(formData),
    to: formData.email,
  })
}

function generateNotificationEmail(formData) {
  return generateEmail('it/EmailOrderNotification.md', {
    formData,
    from: BOT_EMAIL,
    replyTo: ADMIN_EMAIL,
    subject: mailSubjectNotification(formData),
    to: NOTIFICATION_EMAIL,
  })
}
function generateEmail(template, { formData, from, replyTo, subject, to }) {
  // read markdown file in same path
  const html = substituteTemplateLiterals(
    parseTemplateToHtml(formData, template),
    formData
  )
  let mailOptions = {
    from,
    to,
    replyTo,
    subject,
    html,
  }
  return mailOptions
}

function parseTemplateToHtml(formData, customerEmailTemplate) {
  const path = require('path') //joining path of directory
  const fs = require('fs')
  const zipItFolder = path.join('', '../../')
  const contentFolder = path.join('', 'src/content/')
  // console.log('zipItFolder', zipItFolder)
  const filepath = path.join(
    __dirname,
    zipItFolder,
    contentFolder,
    customerEmailTemplate
  )
  console.log('Read Markdown:', filepath)
  const buffer = fs.readFileSync(filepath, {
    encoding: 'utf-8',
  })

  // use the toString() method to convert fileBuffer into String
  const fileContent = buffer.toString()

  const { marked } = require('marked')

  // Set options
  marked.setOptions({
    gfm: true,
    breaks: true,
    sanitize: false,
    smartLists: true,
    smartypants: false,
  })
  const parsedHTML = marked.parse(fileContent)
  return parsedHTML
}

function printDirTree() {
  const path = require('path') //joining path of directory
  const directoryPath = path.join(__dirname, '../..')
  const dirTree = require('directory-tree')
  console.debug('dirTree:')
  const tree = dirTree(
    directoryPath,
    { extensions: /\.md/ },
    (item, PATH, stats) => {
      if (!PATH.includes('README') && !PATH.includes('node_modules'))
        console.log(PATH)
    }
  )
}

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

const mailSubjectCustomer = ({ name }) => `SPRACHRAUM: Anmeldung für ${name}`
const mailSubjectNotification = ({ email, name }) =>
  `Anmeldung von ${email} für ${name}`
