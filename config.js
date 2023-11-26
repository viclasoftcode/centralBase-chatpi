require('dotenv').config()

const config = {
    port: process.env.PORT || 8080,
    dbUrl: process.env.MONGODB_CNN
}

module.exports = config