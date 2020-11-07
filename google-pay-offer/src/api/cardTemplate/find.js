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
  const { query } = request
  const { issuer } = query || {}

  const response = await client.request({
    url: 'https://www.googleapis.com/walletobjects/v1/offerClass',
    params: {
      issuerId: issuer.id
    }
  })

  return response.data.resources || []
}
