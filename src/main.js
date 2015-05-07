var app = require('ampersand-app')
var View = require('ampersand-view')
var localLinks = require('local-links')
var ViewSwitcher = require('ampersand-view-switcher')
var template = require('./templates/body.jade')

module.exports = View.extend({
  template: template,

  autoRender: true,

  events: {
    'click a[href]': 'onLinkClick'
  },

  bindings: {
    'model.token': {
      type: 'toggle',
      hook: 'navbar'
    },

    'model.login': {
      hook: 'username'
    }
  },

  initialize: function () {
    this.listenTo(app, 'page', this.onPage)
  },

  render: function () {
    this.renderWithTemplate()
    this.pageSwitcher = new ViewSwitcher(this.queryByHook('page-container'))
  },

  onPage: function (page) {
    this.pageSwitcher.set(page)
  },

  onLinkClick: function (event) {
    var pathname = localLinks.getLocalPathname(event)

    if (pathname) {
      event.preventDefault()
      app.router.history.navigate(pathname)
    }
  }
})











