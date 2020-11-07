/**
 *
 * Reference:
 * ---------
 * https://developers.google.com/pay/passes/reference/v1/loyaltyobject/insert
 *
 */

const client = require('../../lib/authClient')
const config = require('../../config')
const offerObject = require('../../lib/offerObject')

module.exports = async (request) => {
  let { body } = request

  body = offerObject(body)
  console.log('*@**@&*!(&*#(@@*(!',body);

  const response = await client.request({
    body: JSON.stringify(body),
    method: 'post',
    url: `https://www.googleapis.com/walletobjects/v1/offerObject`
  })

  console.log('8768778687785',response);

  return response.data
}
