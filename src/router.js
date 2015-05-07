var app = require('ampersand-app')
var Router = require('ampersand-router')
var qs = require('qs')
var xhr = require('xhr')
var ReposPage = require('./pages/repos')
var PublicPage = require('./pages/public')

function auth(handlerName) {
  return function () {
    if (app.me.token) {
      this[handlerName].call(this, arguments)
    } else {
      this.redirectTo('/')
    }
  }
}

module.exports = Router.extend({
  routes: {
    '': 'public',
    'repos': auth('repos'),
    'login': 'login',
    'logout': 'logout',
    'auth/callback': 'authCallback'
  },

  public: function () {
    app.trigger('page', new PublicPage())
  },

  repos: function () {
    app.trigger('page', new ReposPage())
  },

  login: function () {
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      client_id: 'f8dd69187841cdd22a26',
      scope: 'user,repo',
      redirect_uri: window.location.origin + '/auth/callback'
    })
  },

  logout: function () {
    window.localStorage.clear()
    window.location = '/'
  },

  authCallback: function () {
    var query = qs.parse(window.location.search.slice(1))
    var self = this

    xhr({
      url: 'https://labelr-localhost.herokuapp.com/authenticate/' + query.code,
      json: true
    }, function (err, response, body) {
      app.me.token = body.token
      self.redirectTo('/repos')
    })
  }
})














































































