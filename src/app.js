var app = require('ampersand-app')
var MainView = require('./main')
var Router = require('./router')
var Me = require('./models/me')
require('./styles/main.styl')
require('../node_modules/octicons/octicons/octicons.css')

window.app = app

app.extend({
  init: function () {
    this.me = new Me()
    this.me.fetchInitialData()
    this.view = new MainView({
      model: this.me,
      el: document.body
    })
    this.router = new Router()
    this.router.history.start()
  }
})

app.init()
