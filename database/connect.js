const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'quan_ly_ban_hang'
});

module.exports = conn;