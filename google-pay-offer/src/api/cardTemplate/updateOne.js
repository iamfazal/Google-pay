/**
 *
 * Reference:
 * ---------
 * https://developers.google.com/pay/passes/reference/v1/loyaltyclass/update
 *
 */

const client = require('../../lib/authClient')
const config = require('../../config')
const offerClass = require('../../lib/offerClass')

module.exports = async (request) => {
  let { body } = request

  body = offerClass(body)

  const response = await client.request({
    body: JSON.stringify(body),
    method: 'put',
    url: `https://www.googleapis.com/walletobjects/v1/offerClass/${body.id}`
  })

  return response.data
}
