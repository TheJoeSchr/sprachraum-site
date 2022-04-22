exports.handler = function (event, context, callback) {
  // Parse data sent in form hook (email, name etc)
  const { data } = JSON.parse(event.body)

  // success!
  callback(null, {
    statusCode: 200,
    body: 'mail sent',
  })
}
