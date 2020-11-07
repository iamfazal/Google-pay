const config = require('../../config')
const jwt = require('jsonwebtoken')
const serviceAccount = require('../../google-service-account.json')

module.exports = async (request) => {
  const { body } = request
  const { card, cardTemplate, issuer } = body || {}
  let offerClasses = [
    {
      id: `${issuer.id}.${cardTemplate.id}`
    }
  ]
  let offerObjects = [
    {
      classId: `${issuer.id}.${cardTemplate.id}`,
      id: `${issuer.id}.${card.id}`
    }
  ]

  const payload = {
    offerClasses,
    offerObjects
  }

  const origin = `${config.server.host}:${config.server.port}`
  const jwt_generated = jwt.sign(
    {
      aud: 'google',
      iat: Math.floor(Date.now() / 1000),
      iss: serviceAccount.client_email,
      origins: [`http://${origin}`, `https://${origin}`],
      payload,
      scope: 'https://www.googleapis.com/auth/wallet_object.issuer',
      typ: 'savetoandroidpay'
    },
    serviceAccount.private_key,
    {
      algorithm: 'RS256',
      header: {
        kid: serviceAccount.private_key_id,
        typ: 'JWT',
        alg: 'RS256'
      }
    }
  )

  return {
    url: `https://pay.google.com/gp/v/save/${jwt_generated}`
  }
}
