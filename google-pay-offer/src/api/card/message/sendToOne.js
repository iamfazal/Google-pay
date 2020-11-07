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
  const { card, issuer } = body || {}
  const { message } = card
  const id = `${issuer.id}.${card.id}`
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
    }
  }

  const response = await client.request({
    method: 'post',
    url: `https://www.googleapis.com/walletobjects/v1/offerObject/${id}/addMessage`,
    body: JSON.stringify(updatedBody)
  })

  return response.data
}
