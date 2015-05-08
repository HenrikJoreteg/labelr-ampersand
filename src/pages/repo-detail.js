var View = require('ampersand-view')
var template = require('../templates/pages/repo-detail.jade')

module.exports = View.extend({
  bindings: {
    'model.full_name': {
      type: 'text',
      hook: 'title'
    }
  },

  template: template
})
