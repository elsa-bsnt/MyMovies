const db = require("../database")
module.exports = function(app) {
    const controller = require("../controller/users");

    app.route('/register')
        .post(controller.register)
}