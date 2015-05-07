var Model = require('ampersand-model')

module.exports = Model.extend({
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

  onTokenChange: function () {
    window.localStorage.token = this.token
    this.fetchInitialData()
  },

  fetchInitialData: function () {
    if (this.token) {
      this.fetch()
    }
  },

  ajaxConfig: function () {
    return {
      headers: {
        'Authorization': 'token ' + this.token
      }
    }
  }
})


























