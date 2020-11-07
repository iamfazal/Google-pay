/**
 *
 * Reference:
 * ---------
 * https://developers.google.com/pay/passes/reference/v1/loyaltyclass/addmessage
 *
 */

const client = require('../../../lib/authClient')
const config = require('../../../config')
const randomNumericId = require('randomatic')

module.exports = async (request) => {
  const { body } = request
  const { cardTemplate, issuer } = body || {}
  const { message } = cardTemplate
  const id = `${issuer.id}.${cardTemplate.id}`
  const updatedBody = {
    message: {
      header: message.header,
      body: message.body,
      displayInterval: {
        start: {
          date: message.startDate
        }
      },
      id: randomNumericId('0', 20),
      messageType: 'expirationNotification'
    }
  }
  const response = await client.request({
    body: JSON.stringify(updatedBody),
    method: 'post',
    url: `https://www.googleapis.com/walletobjects/v1/offerClass/${id}/addMessage`
  })

  return response.data
}
