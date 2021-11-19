
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./web3-contract-calls.cjs.production.min.js')
} else {
  module.exports = require('./web3-contract-calls.cjs.development.js')
}
