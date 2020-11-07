/**
 *
 * Reference:
 * https://developers.google.com/pay/passes/reference/v1/offerobject
 *
 */

module.exports = (params) => {
  const { card, cardTemplate, issuer } = params

  let offerObject = {
    /**
     * Required
     */
    classId: `${issuer.id}.${cardTemplate.id}`,
    id: `${issuer.id}.${card.id}`,
    state: 'active',
    title: card.title,

    /**
     * Optional
     */
    barcode: {
      type: 'qrCode',
      value: card.id
    },
    validTimeInterval: {
      end: {
        date: card.validTill
      },
      start: {
        date: card.validFrom
      }
    }
  }

  return offerObject
}
