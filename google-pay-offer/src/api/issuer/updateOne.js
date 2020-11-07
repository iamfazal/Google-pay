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
  const { issuerId } = body || {}

  const response = await client.request({
    method: 'put',
    url: `https://www.googleapis.com/walletobjects/v1/issuer/${issuerId}`,
    body: JSON.stringify(body)
  })

  return response.data
}
