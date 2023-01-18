const db = require("../database.js");
const {response} = require("express");
const bcrypt = require('bcrypt');
const connection = db.connection

connection.connect()

module.exports.register = async function(req, res){

    let password = req.body.password
    let mail = req.body.mail

    await bcrypt.genSalt(5, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            // Refers to the hashed password with 'hash'
            connection.query('INSERT INTO `test`.`users` (`mail`, `password`) VALUES (?, ?)',[mail, hash],  function (err, results, fields) {
               return res.status(201).send("Created")
            })

        });
    });
}