/**
 *
 * Reference:
 * ---------
 * https://developers.google.com/pay/passes/reference/v1/loyaltyclass/update
 *
 */

const client = require('../../lib/authClient')
const config = require('../../config')
const offerObject = require('../../lib/offerObject')

module.exports = async (request) => {
  let { body } = request

  body = offerObject(body)

  const response = await client.request({
    body: JSON.stringify(body),
    method: 'put',
    url: `https://www.googleapis.com/walletobjects/v1/offerObject/${body.id}`
  })

  return response.data
}
