var app = require('ampersand-app')
var Router = require('ampersand-router')
var qs = require('qs')
var xhr = require('xhr')
var ReposPage = require('./pages/repos')
var PublicPage = require('./pages/public')

module.exports = Router.extend({
  routes: {
    '': 'public',
    'repos': 'repos',
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

  },

  authCallback: function () {
    var query = qs.parse(window.location.search.slice(1))
    console.log(query.code)

    xhr({
      url: 'https://labelr-localhost.herokuapp.com/authenticate/' + query.code,
      json: true
    }, function (err, response, body) {
      console.log(body)
    })
  }
})


























































