var app = require('ampersand-app')
var Model = require('ampersand-model')
var xhr = require('xhr')
var githubMixin = require('../helpers/github-mixin')

module.exports = Model.extend(githubMixin, {
  idAttribute: 'name',

  props: {
    name: 'string',
    color: 'string'
  },

  session: {
    editing: {
      type: 'boolean',
      default: false
    }
  },

  derived: {
    style: {
      deps: ['color'],
      fn: function () {
        return 'background-color: #' + this.color
      }
    }
  },

  update: function (newAttributes) {
    var oldAttributes = this.attributes
    var self = this

    xhr({
      url: this.url(),
      json: newAttributes,
      method: 'PATCH',
      headers: {
        'Authorization': 'token ' + app.me.token
      }
    }, function (err, resp, body) {
      if (err) {
        console.error('something went wrong')
        self.set(oldAttributes)
      }
    })
    this.set(newAttributes)
  }
})


















