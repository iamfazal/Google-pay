const issuerApi = {
  create: () => {
    return {
      data: {
        issuerId: '4234523453245342',
        name: 'Caroline Jaana Psychic',
        contactInfo: {
          name: 'Umair Ahmed',
          phone: '2342398098',
          email: 'umair@gmail.com'
        },
        homepageUrl: 'http://caroline-jaana-psychic.com'
      }
    }
  },
  findOne: () => {
    return {
      data: {
        issuerId: '4234523453245342',
        name: 'Caroline Jaana Psychic',
        contactInfo: {
          name: 'Umair Ahmed',
          phone: '2342398098',
          email: 'umair@gmail.com'
        },
        homepageUrl: 'http://caroline-jaana-psychic.com'
      }
    }
  },
  updateOne: () => {
    return {
      data: {
        issuerId: '4234523453245342',
        name: 'Caroline Jaana Psychic',
        contactInfo: {
          name: 'Umair Ahmed',
          phone: '2342398098',
          email: 'umair@gmail.com'
        },
        homepageUrl: 'http://caroline-jaana-psychic.com'
      }
    }
  }
}

module.exports = issuerApi
