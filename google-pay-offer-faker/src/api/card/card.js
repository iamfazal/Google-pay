const cardApi = {
  create: () => {
    return {
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
        },
        id: '4234523453245342.c789904366304',
        classId: '4234523453245342.ct789904366304',
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
  },
  find: () => {
    return {
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
          },
          id: '4234523453245342.c789904366304',
          classId: '4234523453245342.ct789904366304',
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
  },
  findOne: () => {
    return {
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
        },
        id: '4234523453245342.c789904366304',
        classId: '4234523453245342.ct789904366304',
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
  },
  message: {
    sendToAll: () => {
      return {
        code: 422,
        error: 'Google Pay is not available in your country'
      }
    },
    sendToOne: () => {
      return {
        code: 422,
        error: 'Google Pay is not available in your country'
      }
    }
  },
  saveToGooglePlay: () => {
    return {
      data: {
        url:
          'https://pay.google.com/gp/v/save/eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImVhZjgyYzM3ZTA5ZTBhZWEwNmYyZGMwZGVlMjhkYTVmNzE1NDA1ZGUifQ.eyJhdWQiOiJnb29nbGUiLCJpYXQiOjE1NjY4MTU2MzUsImlzcyI6Imdvb2dsZS1wYXlAc2hlZXRzZGItMjQ3MDE4LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwib3JpZ2lucyI6WyJodHRwOi8vNTIuNTkuNTEuMjExOjMwMDAiLCJodHRwczovLzUyLjU5LjUxLjIxMTozMDAwIl0sInBheWxvYWQiOnsib2ZmZXJDbGFzc2VzIjpbeyJraW5kIjoid2FsbGV0b2JqZWN0cyNvZmZlckNsYXNzIiwidGl0bGUiOiJEaXNjb3VudCAxMiUiLCJyZWRlbXB0aW9uQ2hhbm5lbCI6Im9ubGluZSIsInByb3ZpZGVyIjoiUHJvdmlkZXIgbmFtZSIsInRpdGxlSW1hZ2UiOnsia2luZCI6IndhbGxldG9iamVjdHMjaW1hZ2UiLCJzb3VyY2VVcmkiOnsidXJpIjoiaHR0cHM6Ly9jZG4udGhlZGVzaWduaW5zcGlyYXRpb24uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzAxL3N0YXI0LmpwZyIsImRlc2NyaXB0aW9uIjoiQ2FyZCBsb2dvIn19LCJkZXRhaWxzIjoiVXBkYXRlZCBDYXJkIGRlc2NyaXB0aW9uIiwiaWQiOiIzMzYzODI1ODg0NzIxMjExNzEzLmN0Nzg5OTA0MzY2MzA0IiwidmVyc2lvbiI6IjEiLCJpc3N1ZXJOYW1lIjoiSXNzdWVyIG5hbWUiLCJtZXNzYWdlcyI6W3sia2luZCI6IndhbGxldG9iamVjdHMjd2FsbGV0T2JqZWN0TWVzc2FnZSIsImhlYWRlciI6IkNhbXBhaWduIG1lc3NhZ2UiLCJib2R5IjoiQ2FtcGFpZ24gbWVzc2FnZSBoZXJlIn0seyJraW5kIjoid2FsbGV0b2JqZWN0cyN3YWxsZXRPYmplY3RNZXNzYWdlIiwiaGVhZGVyIjoiSHVycnkhIiwiYm9keSI6Ik9mZmVyIGV4cGlyZXMgc29vbiBmb3IgYWxsISIsImRpc3BsYXlJbnRlcnZhbCI6eyJraW5kIjoid2FsbGV0b2JqZWN0cyN0aW1lSW50ZXJ2YWwiLCJzdGFydCI6eyJkYXRlIjoiMjAxOS0wOC0yNlQwMDowMDowMFoifX0sImlkIjoiOTQ5MDIyMzE3NDc2NjIzNjY0MzUiLCJtZXNzYWdlVHlwZSI6ImV4cGlyYXRpb25Ob3RpZmljYXRpb24ifSx7ImtpbmQiOiJ3YWxsZXRvYmplY3RzI3dhbGxldE9iamVjdE1lc3NhZ2UiLCJoZWFkZXIiOiJIdXJyeSEiLCJib2R5IjoiT2ZmZXIgZXhwaXJlcyBzb29uIGZvciBhbGwhIiwiZGlzcGxheUludGVydmFsIjp7ImtpbmQiOiJ3YWxsZXRvYmplY3RzI3RpbWVJbnRlcnZhbCIsInN0YXJ0Ijp7ImRhdGUiOiIyMDE5LTA4LTI2VDAwOjAwOjAwWiJ9fSwiaWQiOiI4ODUxODMxOTQ1ODk1OTMwOTQ5NSIsIm1lc3NhZ2VUeXBlIjoiZXhwaXJhdGlvbk5vdGlmaWNhdGlvbiJ9XSwicmV2aWV3U3RhdHVzIjoiYXBwcm92ZWQiLCJ0ZXh0TW9kdWxlc0RhdGEiOlt7ImhlYWRlciI6IkxvY2F0aW9uIiwiYm9keSI6IkFkZHJlc3MgaGVyZSJ9LHsiaGVhZGVyIjoiQWJvdXQiLCJib2R5IjoiSXNzdWVyIGRlc2NyaXB0aW9uIn1dLCJsaW5rc01vZHVsZURhdGEiOnsidXJpcyI6W3sia2luZCI6IndhbGxldG9iamVjdHMjdXJpIiwidXJpIjoiMTIzNDU2Nzg5MCIsImRlc2NyaXB0aW9uIjoiUGhvbmUifSx7ImtpbmQiOiJ3YWxsZXRvYmplY3RzI3VyaSIsInVyaSI6Imlzc3Vlci1lbWFpbEBnbWFpbC5jb20iLCJkZXNjcmlwdGlvbiI6IkVtYWlsIn0seyJraW5kIjoid2FsbGV0b2JqZWN0cyN1cmkiLCJ1cmkiOiJodHRwczovL2lzc3Vlci13ZWJzaXRlLmNvbSIsImRlc2NyaXB0aW9uIjoiV2Vic2l0ZSJ9LHsia2luZCI6IndhbGxldG9iamVjdHMjdXJpIiwidXJpIjoiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2lzc3Vlci1mYiIsImRlc2NyaXB0aW9uIjoiRmFjZWJvb2sifV19LCJoZXhCYWNrZ3JvdW5kQ29sb3IiOiIjZjhhNDAwIn1dLCJvZmZlck9iamVjdHMiOlt7ImtpbmQiOiJ3YWxsZXRvYmplY3RzI29mZmVyT2JqZWN0IiwiY2xhc3NSZWZlcmVuY2UiOnsia2luZCI6IndhbGxldG9iamVjdHMjb2ZmZXJDbGFzcyIsInRpdGxlIjoiRGlzY291bnQgMTIlIiwicmVkZW1wdGlvbkNoYW5uZWwiOiJvbmxpbmUiLCJwcm92aWRlciI6IlByb3ZpZGVyIG5hbWUiLCJ0aXRsZUltYWdlIjp7ImtpbmQiOiJ3YWxsZXRvYmplY3RzI2ltYWdlIiwic291cmNlVXJpIjp7InVyaSI6Imh0dHBzOi8vY2RuLnRoZWRlc2lnbmluc3BpcmF0aW9uLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS9zdGFyNC5qcGciLCJkZXNjcmlwdGlvbiI6IkNhcmQgbG9nbyJ9fSwiZGV0YWlscyI6IlVwZGF0ZWQgQ2FyZCBkZXNjcmlwdGlvbiIsImlkIjoiMzM2MzgyNTg4NDcyMTIxMTcxMy5jdDc4OTkwNDM2NjMwNCIsInZlcnNpb24iOiIxIiwiaXNzdWVyTmFtZSI6Iklzc3VlciBuYW1lIiwibWVzc2FnZXMiOlt7ImtpbmQiOiJ3YWxsZXRvYmplY3RzI3dhbGxldE9iamVjdE1lc3NhZ2UiLCJoZWFkZXIiOiJDYW1wYWlnbiBtZXNzYWdlIiwiYm9keSI6IkNhbXBhaWduIG1lc3NhZ2UgaGVyZSJ9LHsia2luZCI6IndhbGxldG9iamVjdHMjd2FsbGV0T2JqZWN0TWVzc2FnZSIsImhlYWRlciI6Ikh1cnJ5ISIsImJvZHkiOiJPZmZlciBleHBpcmVzIHNvb24gZm9yIGFsbCEiLCJkaXNwbGF5SW50ZXJ2YWwiOnsia2luZCI6IndhbGxldG9iamVjdHMjdGltZUludGVydmFsIiwic3RhcnQiOnsiZGF0ZSI6IjIwMTktMDgtMjZUMDA6MDA6MDBaIn19LCJpZCI6Ijk0OTAyMjMxNzQ3NjYyMzY2NDM1IiwibWVzc2FnZVR5cGUiOiJleHBpcmF0aW9uTm90aWZpY2F0aW9uIn0seyJraW5kIjoid2FsbGV0b2JqZWN0cyN3YWxsZXRPYmplY3RNZXNzYWdlIiwiaGVhZGVyIjoiSHVycnkhIiwiYm9keSI6Ik9mZmVyIGV4cGlyZXMgc29vbiBmb3IgYWxsISIsImRpc3BsYXlJbnRlcnZhbCI6eyJraW5kIjoid2FsbGV0b2JqZWN0cyN0aW1lSW50ZXJ2YWwiLCJzdGFydCI6eyJkYXRlIjoiMjAxOS0wOC0yNlQwMDowMDowMFoifX0sImlkIjoiODg1MTgzMTk0NTg5NTkzMDk0OTUiLCJtZXNzYWdlVHlwZSI6ImV4cGlyYXRpb25Ob3RpZmljYXRpb24ifV0sInJldmlld1N0YXR1cyI6ImFwcHJvdmVkIiwidGV4dE1vZHVsZXNEYXRhIjpbeyJoZWFkZXIiOiJMb2NhdGlvbiIsImJvZHkiOiJBZGRyZXNzIGhlcmUifSx7ImhlYWRlciI6IkFib3V0IiwiYm9keSI6Iklzc3VlciBkZXNjcmlwdGlvbiJ9XSwibGlua3NNb2R1bGVEYXRhIjp7InVyaXMiOlt7ImtpbmQiOiJ3YWxsZXRvYmplY3RzI3VyaSIsInVyaSI6IjEyMzQ1Njc4OTAiLCJkZXNjcmlwdGlvbiI6IlBob25lIn0seyJraW5kIjoid2FsbGV0b2JqZWN0cyN1cmkiLCJ1cmkiOiJpc3N1ZXItZW1haWxAZ21haWwuY29tIiwiZGVzY3JpcHRpb24iOiJFbWFpbCJ9LHsia2luZCI6IndhbGxldG9iamVjdHMjdXJpIiwidXJpIjoiaHR0cHM6Ly9pc3N1ZXItd2Vic2l0ZS5jb20iLCJkZXNjcmlwdGlvbiI6IldlYnNpdGUifSx7ImtpbmQiOiJ3YWxsZXRvYmplY3RzI3VyaSIsInVyaSI6Imh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9pc3N1ZXItZmIiLCJkZXNjcmlwdGlvbiI6IkZhY2Vib29rIn1dfSwiaGV4QmFja2dyb3VuZENvbG9yIjoiI2Y4YTQwMCJ9LCJpZCI6IjMzNjM4MjU4ODQ3MjEyMTE3MTMuYzc4OTkwNDM2NjMwNCIsImNsYXNzSWQiOiIzMzYzODI1ODg0NzIxMjExNzEzLmN0Nzg5OTA0MzY2MzA0IiwidmVyc2lvbiI6IjEiLCJzdGF0ZSI6ImFjdGl2ZSIsImJhcmNvZGUiOnsia2luZCI6IndhbGxldG9iamVjdHMjYmFyY29kZSIsInR5cGUiOiJxckNvZGUiLCJ2YWx1ZSI6ImM3ODk5MDQzNjYzMDQifSwibWVzc2FnZXMiOlt7ImtpbmQiOiJ3YWxsZXRvYmplY3RzI3dhbGxldE9iamVjdE1lc3NhZ2UiLCJoZWFkZXIiOiJIdXJyeSEiLCJib2R5IjoiT2ZmZXIgZXhwaXJlcyBzb29uISIsImRpc3BsYXlJbnRlcnZhbCI6eyJraW5kIjoid2FsbGV0b2JqZWN0cyN0aW1lSW50ZXJ2YWwiLCJzdGFydCI6eyJkYXRlIjoiMjAxOS0wOC0yNlQwMDowMDowMFoifX0sImlkIjoiOTIxNzk5Njk1ODE2MzA5MjY2NjQiLCJtZXNzYWdlVHlwZSI6ImV4cGlyYXRpb25Ob3RpZmljYXRpb24ifSx7ImtpbmQiOiJ3YWxsZXRvYmplY3RzI3dhbGxldE9iamVjdE1lc3NhZ2UiLCJoZWFkZXIiOiJIdXJyeSEiLCJib2R5IjoiT2ZmZXIgZXhwaXJlcyBzb29uISIsImRpc3BsYXlJbnRlcnZhbCI6eyJraW5kIjoid2FsbGV0b2JqZWN0cyN0aW1lSW50ZXJ2YWwiLCJzdGFydCI6eyJkYXRlIjoiMjAxOS0wOC0yNlQwMDowMDowMFoifX0sImlkIjoiMzI1OTc0MTA4MzcwMTA0ODQxMTYiLCJtZXNzYWdlVHlwZSI6ImV4cGlyYXRpb25Ob3RpZmljYXRpb24ifV0sInZhbGlkVGltZUludGVydmFsIjp7ImtpbmQiOiJ3YWxsZXRvYmplY3RzI3RpbWVJbnRlcnZhbCIsInN0YXJ0Ijp7ImRhdGUiOiIyMDE5LTA4LTI2VDAwOjAwOjAwWiJ9LCJlbmQiOnsiZGF0ZSI6IjIwMTktMDgtMjhUMDA6MDA6MDBaIn19LCJoYXNVc2VycyI6dHJ1ZX1dfSwic2NvcGUiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3dhbGxldF9vYmplY3QuaXNzdWVyIiwidHlwIjoic2F2ZXRvYW5kcm9pZHBheSJ9.TqiYEnwVPAEI-tGWn1u7twikQp76oiLlTU-hS95GN7NneeSDPxnX3DYybfoori70yNNeoKx6sI9-29KOW721RZYGcQvBXHcT4az5uPw3l69vlOHEfeO1b3ZIQn58r7H5rCjtWCAQbFRqHNiVq6le6tXL6wijRfMtDUvRPBGldn3WmMkcH76BdYQjygKZ4jQpQ5TyGWbecviwUfkGunUFPUyhh1NYuYVf2Bos7_6IAjitVPLUFkLioWPp1tnOfVsC3o20wjmmJuVwA7OY-01EOnuyfKcnneY-sBJomHNjKfArmnIyL1Bbg4ibjYg9idaX9meLBVzgUWNlS24jnxYEmA'
      }
    }
  },
  updateOne: () => {
    return {
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
        },
        id: '4234523453245342.c789904366304',
        classId: '4234523453245342.ct789904366304',
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
  }
}

module.exports = cardApi
