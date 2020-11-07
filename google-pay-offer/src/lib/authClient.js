const { auth } = require('google-auth-library')
const keys = require('../google-service-account.json');
  

const client = auth.fromJSON(keys)
client.scopes = ['https://www.googleapis.com/auth/wallet_object.issuer']

module.exports = client
