var Model = require('ampersand-model')
var LabelCollection = require('./label-collection')

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
  },

  collections: {
    labels: LabelCollection
  },

  fetch: function () {
    Model.prototype.fetch.call(this, arguments)
    this.labels.fetch()
  }
})
