var Collection = require('ampersand-rest-collection')
var Repo = require('./repo')
var githubMixin = require('../helpers/github-mixin')

module.exports = Collection.extend(githubMixin, {
  url: 'https://api.github.com/user/repos',

  model: Repo,

  getByFullName: function (fullName) {
    var model = this.findWhere({full_name: fullName})

    if (!model) {
      model = new Repo({full_name: fullName})
    }

    model.fetch()

    return model
  }
})
