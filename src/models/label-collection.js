/*
This is a child collection of our repo model
*/
var Collection = require('ampersand-rest-collection')
var Label = require('./label')
var githubMixin = require('../helpers/github-mixin')

module.exports = Collection.extend(githubMixin, {
  url: function () {
    return this.parent.url() + '/labels'
  },

  model: Label
})
