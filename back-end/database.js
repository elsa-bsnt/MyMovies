let mysql = require('mysql')
const dotenv= require ('dotenv')

dotenv.config({ path: './.env'})

const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.MYSQL_DB,
    }
)

connection.connect( (error) => {
    if(error){
        console.log(error)
    } else {
        console.log('Database Connected')
    }
})

module.exports = connection;