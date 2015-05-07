var app = require('ampersand-app')
var View = require('ampersand-view')
var ViewSwitcher = require('ampersand-view-switcher')
var template = require('./templates/body.jade')

module.exports = View.extend({
  template: template,

  autoRender: true,

  initialize: function () {
    this.listenTo(app, 'page', this.onPage)
  },

  render: function () {
    this.renderWithTemplate()
    this.pageSwitcher = new ViewSwitcher(this.queryByHook('page-container'))
  },

  onPage: function (page) {
    this.pageSwitcher.set(page)
  }
})














