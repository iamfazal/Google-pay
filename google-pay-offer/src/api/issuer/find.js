/**
 *
 * Reference:
 * ---------
 * https://developers.google.com/pay/passes/reference/v1/issuer
 *
 */

const client = require('../../lib/authClient')
const config = require('../../config')

module.exports = async () => {
  const response = await client.request({
    url: 'https://www.googleapis.com/walletobjects/v1/issuer'
  })

  return response.data.resources || []
}
