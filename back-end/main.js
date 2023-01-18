require ("dotenv").config();

let express = require('express'),
    app = express(),
    port = process.env.DB_PORT || 3307;
bodyParser = require('body-parser');
let cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('../back-end/routes/users');
routes(app);

app.listen(port, () => {
    console.log("port " + port + " connecté")
});

console.log('Listening on PORT: ' + port);