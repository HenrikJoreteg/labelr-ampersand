var app = require('ampersand-app')
var View = require('ampersand-view')
var RepoItemView = require('../views/repo-item')
var template = require('../templates/pages/repos.jade')

module.exports = View.extend({
  template: template,

  render: function () {
    this.renderWithTemplate()
    this.renderCollection(app.me.repos, RepoItemView, this.queryByHook('repo-container'))
  }
})
