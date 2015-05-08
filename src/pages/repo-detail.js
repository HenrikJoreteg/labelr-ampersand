var View = require('ampersand-view')
var template = require('../templates/pages/repo-detail.jade')
var LabelView = require('../views/label-item')

module.exports = View.extend({
  bindings: {
    'model.full_name': {
      type: 'text',
      hook: 'title'
    }
  },

  template: template,

  render: function () {
    this.renderWithTemplate(this)

    this.renderCollection(this.model.labels, LabelView, this.queryByHook('label-container'))
  }
})
