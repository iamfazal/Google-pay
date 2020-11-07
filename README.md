# Google Pay

## Offers

- Card <[OfferObject](https://developers.google.com/pay/passes/reference/v1/offerobject#resource-representations)>

  - [Get a card](#get-a-card)
  - [Get all cards](#get-all-cards)
  - [Create a card](#create-a-card)
  - [Update a card](#update-a-card)
  - [Save a card](#save-a-card)
  - [Message a card](#message-a-card)
  - [Message all cards](#message-all-cards)

- Card Template <[OfferClass](https://developers.google.com/pay/passes/reference/v1/offerclass#resource-representations)>

  - [Get a card template](#get-a-card-template)
  - [Get all card templates](#get-all-card-templates)
  - [Create a card template](#create-a-card-template)
  - [Update a card template](#update-a-card-template)

- Issuer <[Issuer](https://developers.google.com/pay/passes/reference/v1/issuer#resource-representations)>

  - [Get an issuer](#get-an-issuer)
  - [Create an issuer](#create-an-issuer)
  - [Update an issuer](#update-an-issuer)

<hr/>
<br/>

### Get a card

`[GET] /google-pay/offer/card`

**Request (params)**

```javascript
{
  card: {
    id: String
  },
  issuer: {
    id: String
  }
}
```

**Response**

```javascript
{
  data: OfferObject
}
```

**Sample Request**

```javascript
{
  card: {
    id: 'c789904366304'
  },
  issuer: {
    id: '<ISSUER_ID>'
  }
}
```

**Sample Response**

```javascript
{
  data: {
    kind: 'walletobjects#offerObject',
    classReference: {
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
      id: '<ISSUER_ID>.ct789904366304',
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
    },
    id: '<ISSUER_ID>.c789904366304',
    classId: '<ISSUER_ID>.ct789904366304',
    version: '1',
    state: 'active',
    barcode: {
      kind: 'walletobjects#barcode',
      type: 'qrCode',
      value: 'c789904366304'
    },
    validTimeInterval: {
      kind: 'walletobjects#timeInterval',
      start: {
        date: '2019-08-24T00:00:00Z'
      },
      end: {
        date: '2019-08-28T00:00:00Z'
      }
    },
    hasUsers: false
  }
}
```

### Get all cards

`[GET] /google-pay/offer/card/all`

**Request (params)**

```javascript
{
  cardTemplate: {
    id: String
  },
  issuer: {
    id: String
  }
}
```

**Response**

```javascript
{
  data: [OfferObject]
}
```

**Sample Request**

```javascript
{
  cardTemplate: {
    id: 'ct789904366304'
  },
  issuer: {
    id: '<ISSUER_ID>'
  }
}
```

**Sample Response**

```javascript
{
  data: [
    {
      kind: 'walletobjects#offerObject',
      classReference: {
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
        id: '<ISSUER_ID>.ct789904366304',
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
      },
      id: '<ISSUER_ID>.c789904366304',
      classId: '<ISSUER_ID>.ct789904366304',
      version: '1',
      state: 'active',
      barcode: {
        kind: 'walletobjects#barcode',
        type: 'qrCode',
        value: 'c789904366304'
      },
      validTimeInterval: {
        kind: 'walletobjects#timeInterval',
        start: {
          date: '2019-08-24T00:00:00Z'
        },
        end: {
          date: '2019-08-28T00:00:00Z'
        }
      },
      hasUsers: false
    }
  ]
}
```

### Create a card

`[POST] /google-pay/offer/card`

**Request (body)**

```javascript
{
  card: {
    id: String,
    validFrom: String, // ISO date
    validTill: String
  },
  cardTemplate: {
    id: String
  },
  issuer: {
    id: String
  }
}
```

**Response**

```javascript
{
  data: OfferObject
}
```

**Sample Request**

```javascript
{
  card: {
    id: 'c789904366304',
    validFrom: "2019-08-25T00:00:00.000Z",
    validTill: "2019-08-28T00:00:00.000Z"
  },
  cardTemplate: {
    id: 'ct789904366304'
  },
  issuer: {
    id: '<ISSUER_ID>'
  }
}
```

**Sample Response**

```javascript
{
  data: {
    kind: 'walletobjects#offerObject',
    classReference: {
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
      id: '<ISSUER_ID>.ct789904366304',
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
    },
    id: '<ISSUER_ID>.c789904366304',
    classId: '<ISSUER_ID>.ct789904366304',
    version: '1',
    state: 'active',
    barcode: {
      kind: 'walletobjects#barcode',
      type: 'qrCode',
      value: 'c789904366304'
    },
    validTimeInterval: {
      kind: 'walletobjects#timeInterval',
      start: {
        date: '2019-08-25T00:00:00Z'
      },
      end: {
        date: '2019-08-28T00:00:00Z'
      }
    }
  }
}
```

### Update a card

`[PUT] /google-pay/offer/card`

**Request (body)**

```javascript
{
  card: {
    id: String,
    validFrom: String, // ISO date
    validTill: String
  },
  cardTemplate: {
    id: String
  },
  issuer: {
    id: String
  }
}
```

**Response**

```javascript
{
  data: OfferObject
}
```

**Sample Request**

```javascript
{
  card: {
    id: 'c789904366304',
    validFrom: "2019-08-24T00:00:00.000Z",
    validTill: "2019-08-28T00:00:00.000Z"
  },
  cardTemplate: {
    id: 'ct789904366304'
  },
  issuer: {
    id: '<ISSUER_ID>'
  }
}
```

**Sample Response**

```javascript
{
  data: {
    kind: 'walletobjects#offerObject',
    classReference: {
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
      id: '<ISSUER_ID>.ct789904366304',
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
    },
    id: '<ISSUER_ID>.c789904366304',
    classId: '<ISSUER_ID>.ct789904366304',
    version: '1',
    state: 'active',
    barcode: {
      kind: 'walletobjects#barcode',
      type: 'qrCode',
      value: 'c789904366304'
    },
    validTimeInterval: {
      kind: 'walletobjects#timeInterval',
      start: {
        date: '2019-08-24T00:00:00Z'
      },
      end: {
        date: '2019-08-28T00:00:00Z'
      }
    }
  }
}
```

### Save a card

`[POST] /google-pay/offer/card/save`

**Request (body)**

```javascript
{
  card: {
    id: String
  },
  cardTemplate: {
    id: String
  },
  issuer: {
    id: String
  }
}
```

**Response**

```javascript
{
  data: {
    url: String
  }
}
```

**Sample Request**

```javascript
{
  card: {
    id: 'c789904366304'
  },
  cardTemplate: {
    id: 'm789904355323'
  },
  issuer: {
    id: '<ISSUER_ID>'
  }
}
```

**Sample Response**

```javascript
{
  data: {
    url: 'https://pay.google.com/gp/v/save/<JWT_TOKEN>'
  }
}
```

### Message a card

`[POST] /google-pay/offer/card/message`

**Request (params)**

```javascript
{
  card: {
    id: String,
    message: {
      body: String,
      header: String,
      startDate:String
    }
  },
  issuer: {
    id: String
  }
}
```

**Response**

```javascript
{
  data: OfferObject
}
```

**Sample Request**

```javascript
{
  card: {
    id: 'c789904366304',
    message: {
      header: 'Hurry!',
      body: 'Offer expires soon!',
      startDate: "2019-08-26T00:00:00.000Z"
    }
  },
  issuer: {
    id: '<ISSUER_ID>'
  }
}
```

**Sample Response**

```javascript
{
  data: {
    resource: {
      kind: 'walletobjects#offerObject',
      classReference: {
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
        id: '<ISSUER_ID>.ct789904366304',
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
      },
      id: '<ISSUER_ID>.c789904366304',
      classId: '<ISSUER_ID>.ct789904366304',
      version: '1',
      state: 'active',
      barcode: {
        kind: 'walletobjects#barcode',
        type: 'qrCode',
        value: 'c789904366304'
      },
      messages: [
        {
          kind: 'walletobjects#walletObjectMessage',
          header: 'Hurry!',
          body: 'Offer expires soon!',
          displayInterval: {
            kind: 'walletobjects#timeInterval',
            start: {
              date: '2019-08-26T00:00:00Z'
            }
          },
          id: '32597410837010484116',
          messageType: 'expirationNotification'
        }
      ],
      validTimeInterval: {
        kind: 'walletobjects#timeInterval',
        start: {
          date: '2019-08-26T00:00:00Z'
        },
        end: {
          date: '2019-08-28T00:00:00Z'
        }
      }
    }
  }
}
```

### Message all cards

`[POST] /google-pay/offer/card/message/all`

**Request (params)**

```javascript
{
  cardTemplate: {
    id: String,
    message: {
      body: String,
      header: String,
      startDate:String
    }
  },
  issuer: {
    id: String
  }
}
```

**Response**

```javascript
{
  data: OfferClass
}
```

**Sample Request**

```javascript
{
  cardTemplate: {
    id: 'c789904366304',
    message: {
      header: 'Hurry!',
      body: 'Offer expires soon for all!',
      startDate: "2019-08-26T00:00:00.000Z"
    }
  },
  issuer: {
    id: '<ISSUER_ID>'
  }
}
```

**Sample Response**

```javascript
{
  data: {
    resource: {
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
      id: '<ISSUER_ID>.ct789904366304',
      version: '1',
      issuerName: 'Issuer name',
      messages: [
        {
          kind: 'walletobjects#walletObjectMessage',
          header: 'Campaign message',
          body: 'Campaign message here'
        },
        {
          kind: 'walletobjects#walletObjectMessage',
          header: 'Hurry!',
          body: 'Offer expires soon for all!',
          displayInterval: {
            kind: 'walletobjects#timeInterval',
            start: {
              date: '2019-08-26T00:00:00Z'
            }
          },
          id: '94902231747662366435',
          messageType: 'expirationNotification'
        },
        {
          kind: 'walletobjects#walletObjectMessage',
          header: 'Hurry!',
          body: 'Offer expires soon for all!',
          displayInterval: {
            kind: 'walletobjects#timeInterval',
            start: {
              date: '2019-08-26T00:00:00Z'
            }
          },
          id: '88518319458959309495',
          messageType: 'expirationNotification'
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
```

### Get a card template

`[GET] /google-pay/offer/cardTemplate`

**Request (params)**

```javascript
{
  cardTemplate: {
    id: String
  },
  issuer: {
    id: String
  }
}
```

**Response**

```javascript
{
  data: OfferClass
}
```

**Sample Request**

```javascript
{
  cardTemplate: {
    id: '<ISSUER_ID>'
  },
  issuer: {
    id: 'ct789904366304'
  }
}
```

**Sample Response**

```javascript
{
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
    id: '<ISSUER_ID>.ct789904366304',
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
```

### Get all card templates

`[GET] /google-pay/offer/cardTemplate/all`

**Request (params)**

```javascript
{
  issuer: {
    id: String
  }
}
```

**Response**

```javascript
{
  data: [OfferClass]
}
```

**Sample Request**

```javascript
{
  issuer: {
    id: '<ISSUER_ID>'
  }
}
```

**Sample Response**

```javascript
{
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
      id: '<ISSUER_ID>.ct789904366304',
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
```

### Create a card template

`[POST] /google-pay/offer/cardTemplate`

**Request (body)**

```javascript
{
  cardTemplate: {
    hexBackgroundColor: String,
    description: String,
    heroImage: String,
    id: String,
    logoUrl: String,
    message: String,
    title: String
  },
  issuer: {
    description: String,
    email: String,
    facebook: String,
    id: String,
    location: String,
    name: String,
    phone: String,
    website: String,
  }
}
```

**Response**

```javascript
{
  data: OfferClass
}
```

**Sample Request**

```javascript
{
  cardTemplate: {
    hexBackgroundColor: '#f8a400',
    description: 'Card description',
    heroImage: 'https://farm4.staticflickr.com/3738/12440799783_3dc3c20606_b.jpg',
    id: 'ct789904366304',
    logoUrl: 'https://cdn.thedesigninspiration.com/wp-content/uploads/2018/01/star4.jpg',
    message: 'Campaign message here',
    title: 'Discount 12%'
  },
  issuer: {
    description: 'Issuer description',
    email: 'issuer-email@gmail.com',
    facebook: 'https://www.facebook.com/issuer-fb',
    id: '<ISSUER_ID>',
    location: 'Address here',
    name: 'Issuer name',
    phone: '1234567890',
    website: 'https://issuer-website.com',
  }
}
```

**Sample Response**

```javascript
{
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
    id: '<ISSUER_ID>.ct789904366304',
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
```

### Update a card template

`[PUT] /google-pay/offer/cardTemplate`

**Request (body)**

```javascript
{
  cardTemplate: {
    hexBackgroundColor: String,
    description: String,
    heroImage: String,
    id: String,
    logoUrl: String,
    message: String,
    title: String
  },
  issuer: {
    description: String,
    email: String,
    facebook: String,
    id: String,
    location: String,
    name: String,
    phone: String,
    website: String,
  }
}
```

**Response**

```javascript
{
  data: OfferClass
}
```

**Sample Request**

```javascript
{
  cardTemplate: {
    hexBackgroundColor: '#f8a400',
    description: 'Updated Card description',
    heroImage: 'https://farm4.staticflickr.com/3738/12440799783_3dc3c20606_b.jpg',
    id: 'ct789904366304',
    logoUrl: 'https://cdn.thedesigninspiration.com/wp-content/uploads/2018/01/star4.jpg',
    message: 'Campaign message here',
    title: 'Discount 12%'
  },
  issuer: {
    description: 'Issuer description',
    email: 'issuer-email@gmail.com',
    facebook: 'https://www.facebook.com/issuer-fb',
    id: '<ISSUER_ID>',
    location: 'Address here',
    name: 'Issuer name',
    phone: '1234567890',
    website: 'https://issuer-website.com',
  }
}
```

**Sample Response**

```javascript
{
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
    id: '<ISSUER_ID>.ct789904366304',
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
```

### Get an issuer

`[GET] /google-pay/offer/issuer`

**Request (params)**

```javascript
{
  issuer: {
    id: String
  }
}
```

**Response**

```javascript
{
  data: {
    contactInfo: {
      email: String,
      name: String,
      phone: String
    },
    issuerId: String,
    homepageUrl: String,
    name: String
  }
}
```

**Sample Request**

```javascript
{
  issuer: {
    id: '3354596808215418082'
  }
}
```

**Sample Response**

```javascript
{
  data: {
    issuerId: "<ISSUER_ID>",
    name: "<MERCHANT_NAME>",
    contactInfo: {
      name: "<MANAGER_NAME>",
      phone: "<MANAGER_PHONE>",
      email: "<MANAGER_EMAIL>"
    },
    homepageUrl: "<WEBSITE>"
  }
}
```

### Create an issuer

`[POST] /google-pay/offer/issuer`

**Request (body)**

```javascript
{
  contactInfo: {
    email: String,
    name: String,
    phone: String
  },
  homepageUrl: String,
  name: String,
}
```

**Response**

```javascript
{
  data: {
    contactInfo: {
      email: String,
      name: String,
      phone: String
    },
    homepageUrl: String,
    issuerId: String,
    name: String,
  }
}
```

**Sample Request**

```javascript
{
  name: "Test 1",
  contactInfo: {
    name: "Manager name 1",
    phone: "AE56780600732",
    email: " manager-email7654@gmail.com"
  },
  homepageUrl: "http://my-business-website.com"
}
```

**Sample Response**

```javascript
{
  issuerId: "<ISSUER_ID>",
  name: "<MERCHANT_NAME>",
  contactInfo: {
    name: "<MANAGER_NAME>",
    phone: "<MANAGER_PHONE>",
    email: "<MANAGER_EMAIL>"
  },
  homepageUrl: "<WEBSITE>"
}
```

### Update an issuer

`[PUT] /google-pay/offer/issuer`

**Request (body)**

```javascript
{
  contactInfo: {
    email: String,
    name: String,
    phone: String
  },
  homepageUrl: String,
  issuerId: String,
  name: String,
}
```

**Response**

```javascript
{
  data: {
    contactInfo: {
      email: String,
      name: String,
      phone: String
    },
    homepageUrl: String,
    issuerId: String,
    name: String,
  }
}
```

**Sample Request**

```javascript
{
  issuerId: "<ISSUER_ID>",
  name: "<MERCHANT_NAME>",
  contactInfo: {
    name: "<MANAGER_NAME>",
    phone: "<MANAGER_PHONE>",
    email: "<MANAGER_EMAIL>"
  },
  homepageUrl: "<WEBSITE>"
}
```

**Sample Response**

```javascript
{
  issuerId: "<ISSUER_ID>",
  name: "<MERCHANT_NAME>",
  contactInfo: {
    name: "<MANAGER_NAME>",
    phone: "<MANAGER_PHONE>",
    email: "<MANAGER_EMAIL>"
  },
  homepageUrl: "<WEBSITE>"
}
```
