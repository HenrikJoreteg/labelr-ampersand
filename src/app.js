var app = require('ampersand-app')
var MainView = require('./main')
var Router = require('./router')
require('./styles/main.styl')

window.app = app

app.extend({
  init: function () {
    this.view = new MainView({
      el: document.body
    })
    this.router = new Router()
    this.router.history.start()
  }
})

app.init()
