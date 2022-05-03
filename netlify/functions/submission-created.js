exports.handler = function (event, context, callback) {
  // Parse data sent in form hook (email, name etc)
  const { payload } = JSON.parse(event.body)

  console.log('Debug log:\n', payload.data)

  // success!
  callback(null, {
    statusCode: 200,
    body: 'mail sent',
  })
}
