const inquirer = require('inquirer');
const util = require('util');
const mysql = require('MYSQL2');

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "employee_db",
})