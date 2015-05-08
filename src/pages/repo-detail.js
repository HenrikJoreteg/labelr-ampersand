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

  events: {
    'click [data-hook=add-label]': 'onAddClick'
  },

  render: function () {
    this.renderWithTemplate(this)
    this.renderCollection(this.model.labels, LabelView, this.queryByHook('label-container'))
  },

  onAddClick: function () {
    this.model.labels.add({
      name: '',
      color: '',
      editing: true,
      saved: false
    }, {at: 0})
  }
})

















