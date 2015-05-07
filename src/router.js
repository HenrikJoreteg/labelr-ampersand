var app = require('ampersand-app')
var Router = require('ampersand-router')
var ReposPage = require('./pages/repos')
var PublicPage = require('./pages/public')

module.exports = Router.extend({
  routes: {
    '': 'public',
    'repos': 'repos'
  },

  public: function () {
    app.trigger('page', new PublicPage())
  },

  repos: function () {
    app.trigger('page', new ReposPage())
  }
})
