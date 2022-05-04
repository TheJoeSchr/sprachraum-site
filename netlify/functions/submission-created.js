exports.handler = function (event, context, callback) {
  // Parse data sent in form hook (email, name etc)
  const { data } = JSON.parse(event.body).payload

  console.log('Debug log:\n', data)

  // success!
  callback(null, {
    statusCode: 200,
    body: 'mail sent:\n' + JSON.stringify(data),
  })
}
