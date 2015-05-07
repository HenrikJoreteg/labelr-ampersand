var View = require('ampersand-view')
var template = require('./templates/body.jade')

module.exports = View.extend({
  template: template,
  autoRender: true
})
