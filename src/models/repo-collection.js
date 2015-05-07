var Collection = require('ampersand-rest-collection')
var Repo = require('./repo')

module.exports = Collection.extend({
  url: 'https://api.github.com/user/repos',

  model: Repo
})
