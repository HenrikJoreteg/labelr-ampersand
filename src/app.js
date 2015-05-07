var app = require('ampersand-app')
var MainView = require('./main')
var Router = require('./router')
var Me = require('./models/me')
require('./styles/main.styl')

window.app = app

app.extend({
  init: function () {
    this.me = new Me()
    this.view = new MainView({
      el: document.body
    })
    this.router = new Router()
    this.router.history.start()
  }
})

app.init()
