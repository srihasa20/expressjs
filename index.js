const express = require('express');
const mysql = require("mysql");
const app = express();
var connection = require('./database');

app.get('/', (req, res) => {
    let sql = " SELECT * FROM EMPLOYEE_INFO";
    connection.query(sql, function(err, results)
    {
        if (err) throw err;
        res.send(results);
         });

});

app.listen(5000, function()
{
    console.log('App listening on port 3001');
    connection.connect(function(err)
    {
  if(err) throw err;
  console.log('Database connected!');    
})
});
app.listen(5000)