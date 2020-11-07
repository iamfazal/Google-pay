const googlePay = require('googlepay-offer')

module.exports = [
  {
    url: '/google-pay/offer/card',
    method: 'get',
    execute: googlePay.card.findOne
  },
  {
    url: '/google-pay/offer/card/all',
    method: 'get',
    execute: googlePay.card.find
  },
  {
    url: '/google-pay/offer/card',
    method: 'post',
    execute: googlePay.card.create
  },
  {
    url: '/google-pay/offer/card',
    method: 'put',
    execute: googlePay.card.updateOne
  },
  {
    url: '/google-pay/offer/card/save',
    method: 'post',
    execute: googlePay.card.saveToGooglePay
  },
  {
    url: '/google-pay/offer/card/message',
    method: 'post',
    execute: googlePay.card.message.sendToOne
  },
  {
    url: '/google-pay/offer/card/message/all',
    method: 'post',
    execute: googlePay.card.message.sendToAll
  },
  {
    url: '/google-pay/offer/cardTemplate',
    method: 'get',
    execute: googlePay.cardTemplate.findOne
  },
  {
    url: '/google-pay/offer/cardTemplate/all',
    method: 'get',
    execute: googlePay.cardTemplate.find
  },
  {
    url: '/google-pay/offer/cardTemplate',
    method: 'post',
    execute: googlePay.cardTemplate.create
  },
  {
    url: '/google-pay/offer/cardTemplate',
    method: 'put',
    execute: googlePay.cardTemplate.updateOne
  },
  {
    url: '/google-pay/offer/issuer',
    method: 'get',
    execute: googlePay.issuer.findOne
  },
  {
    url: '/google-pay/offer/issuer',
    method: 'post',
    execute: googlePay.issuer.create
  },
  {
    url: '/google-pay/offer/issuer',
    method: 'put',
    execute: googlePay.issuer.updateOne
  }
]
