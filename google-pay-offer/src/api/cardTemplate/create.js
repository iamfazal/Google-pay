/**
 *
 * Reference:
 * ---------
 * https://developers.google.com/pay/passes/reference/v1/loyaltyclass/insert
 *
 */

const client = require('../../lib/authClient')
const config = require('../../config')
const offerClass = require('../../lib/offerClass')

module.exports = async (request) => {
  let { body } = request

  const response = await client.request({
    body: JSON.stringify(offerClass(body)),
    method: 'post',
    url: `https://www.googleapis.com/walletobjects/v1/offerClass`
  })

  return response.data
}
