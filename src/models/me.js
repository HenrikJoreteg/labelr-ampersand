var Model = require('ampersand-model')
var RepoCollection = require('./repo-collection')
var githubMixin = require('../helpers/github-mixin')

module.exports = Model.extend(githubMixin, {
  url: 'https://api.github.com/user',

  initialize: function () {
    this.token = window.localStorage.token
    this.on('change:token', this.onTokenChange)
  },

  props: {
    id: 'number',
    login: 'string',
    avatar_url: 'string'
  },

  session: {
    token: 'string'
  },

  collections: {
    repos: RepoCollection
  },

  onTokenChange: function () {
    window.localStorage.token = this.token
    this.fetchInitialData()
  },

  fetchInitialData: function () {
    if (this.token) {
      this.fetch()
      this.repos.fetch()
    }
  }
})










































