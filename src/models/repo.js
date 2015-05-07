var Model = require('ampersand-model')

module.exports = Model.extend({
  props: {
    id: 'number',
    name: 'string',
    full_name: 'string'
  }
})
