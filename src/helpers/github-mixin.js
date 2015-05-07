var app = require('ampersand-app')

module.exports = {
  ajaxConfig: function () {
    return {
      headers: {
        'Authorization': 'token ' + app.me.token
      }
    }
  }
}
