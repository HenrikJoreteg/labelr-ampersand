var Model = require('ampersand-model')

module.exports = Model.extend({
  url: function () {
    return 'https://api.github.com/repos/' + this.full_name
  },

  props: {
    id: 'number',
    name: 'string',
    full_name: 'string'
  },

  derived: {
    app_url: {
      deps: ['full_name'],
      fn: function () {
        return '/repo/' + this.full_name
      }
    }
  }
})
