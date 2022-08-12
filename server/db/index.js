var mysql = require('mysql2');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

// console.log('im in');
const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // change this
  database: 'chat' // does your database exist?
});

dbConnection.connect();

module.exports = {dbConnection};

// const tablename = 'Messages'; // TODO: fill this out
// dbConnection.query(`SELECT * FROM ${tablename}`,function(err, results, fields) {
//   console.log(results,'this is are results'); // results contains rows returned by server
//   //console.log(fields); // fields contains extra meta data about results, if available
// });
// .then(()=> {
//   console.log('im done');
//   dbConnection.end();
// });
