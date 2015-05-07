var Collection = require('ampersand-rest-collection')
var Repo = require('./repo')
var githubMixin = require('../helpers/github-mixin')

module.exports = Collection.extend(githubMixin, {
  url: 'https://api.github.com/user/repos',

  model: Repo
})
