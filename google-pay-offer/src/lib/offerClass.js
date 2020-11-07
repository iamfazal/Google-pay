/**
 *
 * Reference:
 * https://developers.google.com/pay/passes/reference/v1/offerclass
 *
 */
const config = require('../config')

module.exports = (params) => {
  const { cardTemplate, issuer } = params

  const offerClass = {
    /**
     * Required
     */
    id: `${issuer.id}.${cardTemplate.id}`,
    issuerName: issuer.name,
    provider: config.provider,
    redemptionChannel: config.redemptionChannel,
    reviewStatus: 'underReview',
    title: cardTemplate.title,
    locations: cardTemplate.locations,
    linksModuleData: cardTemplate.linksModuleData,
    /**
     * Optional
     */
    details: cardTemplate.description,
    hexBackgroundColor: cardTemplate.hexBackgroundColor,
    messages: [
      {
        header: 'Campaign message',
        body: cardTemplate.message
      }
    ],
    textModulesData: [
      {
        header: 'About',
        body: issuer.description
      }
    ],
    titleImage: {
      sourceUri: {
        uri: cardTemplate.logoUrl,
        description: 'Card logo'
      }
    }
  }

  return offerClass
}