var View = require('ampersand-view')
var template = require('../templates/views/label-item.jade')

module.exports = View.extend({
  template: template,

  bindings: {
    'model.editing': {
      type: 'toggle',
      yes: '[data-hook=editing]',
      no: '[data-hook=viewing]'
    },

    'model.style': {
      type: 'attribute',
      name: 'style',
      hook: 'color-dot'
    },

    'model.name': {
      hook: 'name'
    }
  },

  events: {
    'click [data-hook=edit]': 'onEditClick',
    'click [data-hook=cancel]': 'onCancelClick',
    'click [data-hook=delete]': 'onDeleteClick',
    'submit form': 'onFormSubmit'
  },

  render: function () {
    this.renderWithTemplate()
    this.cacheElements({
      nameInput: 'input[name=name]',
      colorInput: 'input[name=color]'
    })
  },

  onEditClick: function () {
    this.model.editing = true
    this.nameInput.value = this.model.name
    this.colorInput.value = this.model.color
  },

  onCancelClick: function () {
    this.model.editing = false
  },

  onDeleteClick: function () {
    this.model.destroy()
  },

  onFormSubmit: function (event) {
    event.preventDefault()
    var name = this.nameInput.value.trim()
    var color = this.colorInput.value.trim()

    if (this.model.saved) {
      this.model.update({
        name: name,
        color: color
      })
    } else {
      this.model.save({
        name: name,
        color: color
      })
      this.model.saved = true
    }

    this.model.editing = false
  }
})


















