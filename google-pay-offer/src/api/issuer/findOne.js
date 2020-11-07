/**
 *
 * Reference:
 * ---------
 * https://developers.google.com/pay/passes/reference/v1/issuer
 *
 */

const client = require('../../lib/authClient')
const config = require('../../config')

module.exports = async (request) => {
  const { body } = request
  const { issuer } = body || {}
  const response = await client.request({
    url: `https://www.googleapis.com/walletobjects/v1/issuer/${issuer.id}`
  })

  return response.data
}
