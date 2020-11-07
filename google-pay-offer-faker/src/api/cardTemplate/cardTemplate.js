const cardTemplateApi = {
  create: () => {
    return {
      data: {
        kind: 'walletobjects#offerClass',
        title: 'Discount 12%',
        redemptionChannel: 'online',
        provider: 'Provider name',
        titleImage: {
          kind: 'walletobjects#image',
          sourceUri: {
            uri:
              'https://cdn.thedesigninspiration.com/wp-content/uploads/2018/01/star4.jpg',
            description: 'Card logo'
          }
        },
        details: 'Card description',
        id: '4234523453245342.ct789904366304',
        version: '1',
        issuerName: 'Issuer name',
        messages: [
          {
            kind: 'walletobjects#walletObjectMessage',
            header: 'Campaign message',
            body: 'Campaign message here'
          }
        ],
        reviewStatus: 'approved',
        textModulesData: [
          {
            header: 'Location',
            body: 'Address here'
          },
          {
            header: 'About',
            body: 'Issuer description'
          }
        ],
        linksModuleData: {
          uris: [
            {
              kind: 'walletobjects#uri',
              uri: '1234567890',
              description: 'Phone'
            },
            {
              kind: 'walletobjects#uri',
              uri: 'issuer-email@gmail.com',
              description: 'Email'
            },
            {
              kind: 'walletobjects#uri',
              uri: 'https://issuer-website.com',
              description: 'Website'
            },
            {
              kind: 'walletobjects#uri',
              uri: 'https://www.facebook.com/issuer-fb',
              description: 'Facebook'
            }
          ]
        },
        hexBackgroundColor: '#f8a400'
      }
    }
  },
  find: () => {
    return {
      data: [
        {
          kind: 'walletobjects#offerClass',
          title: 'Discount 12%',
          redemptionChannel: 'online',
          provider: 'Provider name',
          titleImage: {
            kind: 'walletobjects#image',
            sourceUri: {
              uri:
                'https://cdn.thedesigninspiration.com/wp-content/uploads/2018/01/star4.jpg',
              description: 'Card logo'
            }
          },
          details: 'Card description',
          id: '4234523453245342.ct789904366304',
          version: '1',
          issuerName: 'Issuer name',
          messages: [
            {
              kind: 'walletobjects#walletObjectMessage',
              header: 'Campaign message',
              body: 'Campaign message here'
            }
          ],
          reviewStatus: 'approved',
          textModulesData: [
            {
              header: 'Location',
              body: 'Address here'
            },
            {
              header: 'About',
              body: 'Issuer description'
            }
          ],
          linksModuleData: {
            uris: [
              {
                kind: 'walletobjects#uri',
                uri: '1234567890',
                description: 'Phone'
              },
              {
                kind: 'walletobjects#uri',
                uri: 'issuer-email@gmail.com',
                description: 'Email'
              },
              {
                kind: 'walletobjects#uri',
                uri: 'https://issuer-website.com',
                description: 'Website'
              },
              {
                kind: 'walletobjects#uri',
                uri: 'https://www.facebook.com/issuer-fb',
                description: 'Facebook'
              }
            ]
          },
          hexBackgroundColor: '#f8a400'
        }
      ]
    }
  },
  findOne: () => {
    return {
      data: {
        kind: 'walletobjects#offerClass',
        title: 'Discount 12%',
        redemptionChannel: 'online',
        provider: 'Provider name',
        titleImage: {
          kind: 'walletobjects#image',
          sourceUri: {
            uri:
              'https://cdn.thedesigninspiration.com/wp-content/uploads/2018/01/star4.jpg',
            description: 'Card logo'
          }
        },
        details: 'Card description',
        id: '4234523453245342.ct789904366304',
        version: '1',
        issuerName: 'Issuer name',
        messages: [
          {
            kind: 'walletobjects#walletObjectMessage',
            header: 'Campaign message',
            body: 'Campaign message here'
          }
        ],
        reviewStatus: 'approved',
        textModulesData: [
          {
            header: 'Location',
            body: 'Address here'
          },
          {
            header: 'About',
            body: 'Issuer description'
          }
        ],
        linksModuleData: {
          uris: [
            {
              kind: 'walletobjects#uri',
              uri: '1234567890',
              description: 'Phone'
            },
            {
              kind: 'walletobjects#uri',
              uri: 'issuer-email@gmail.com',
              description: 'Email'
            },
            {
              kind: 'walletobjects#uri',
              uri: 'https://issuer-website.com',
              description: 'Website'
            },
            {
              kind: 'walletobjects#uri',
              uri: 'https://www.facebook.com/issuer-fb',
              description: 'Facebook'
            }
          ]
        },
        hexBackgroundColor: '#f8a400'
      }
    }
  },
  updateOne: () => {
    return {
      data: {
        kind: 'walletobjects#offerClass',
        title: 'Discount 12%',
        redemptionChannel: 'online',
        provider: 'Provider name',
        titleImage: {
          kind: 'walletobjects#image',
          sourceUri: {
            uri:
              'https://cdn.thedesigninspiration.com/wp-content/uploads/2018/01/star4.jpg',
            description: 'Card logo'
          }
        },
        details: 'Updated Card description',
        id: '4234523453245342.ct789904366304',
        version: '1',
        issuerName: 'Issuer name',
        messages: [
          {
            kind: 'walletobjects#walletObjectMessage',
            header: 'Campaign message',
            body: 'Campaign message here'
          }
        ],
        reviewStatus: 'approved',
        textModulesData: [
          {
            header: 'Location',
            body: 'Address here'
          },
          {
            header: 'About',
            body: 'Issuer description'
          }
        ],
        linksModuleData: {
          uris: [
            {
              kind: 'walletobjects#uri',
              uri: '1234567890',
              description: 'Phone'
            },
            {
              kind: 'walletobjects#uri',
              uri: 'issuer-email@gmail.com',
              description: 'Email'
            },
            {
              kind: 'walletobjects#uri',
              uri: 'https://issuer-website.com',
              description: 'Website'
            },
            {
              kind: 'walletobjects#uri',
              uri: 'https://www.facebook.com/issuer-fb',
              description: 'Facebook'
            }
          ]
        },
        hexBackgroundColor: '#f8a400'
      }
    }
  }
}

module.exports = cardTemplateApi
