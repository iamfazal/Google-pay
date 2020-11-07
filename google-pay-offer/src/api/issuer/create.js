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
  let { body } = request
  // console.log(request)
  console.log(body);
  
  // console.log(JSON.stringify(body, null, 2))

  const response = await client.request({
    method: 'post',
    url: 'https://www.googleapis.com/walletobjects/v1/issuer',
    body: JSON.stringify(body)
  })

  return response.data
}

async function createData(body) {
  // let { body } = request
  // console.log(request)
  // console.log(body);
  
  // console.log(JSON.stringify(body, null, 2))

  const response = await client.request({
    method: 'post',
    url: 'https://www.googleapis.com/walletobjects/v1/issuer',
    body: JSON.stringify(body)
  })

  return response.data
}

async function createIssuer(){
  try {
    const result = await createData({
      "contactInfo": {
        "email": "waltli@gmail.com",
        "name": "waltli",
        "phone": "987654321"
      },
      "homepageUrl": "waltli.com",
      "name": "waltli"
    })
    console.log(result);
    
  } catch (error) {
    console.log(error);
    
  }

}

createIssuer()
