const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    database: "employee_db",
    user: 'root',
    password:'root'


});

module.exports = connection;