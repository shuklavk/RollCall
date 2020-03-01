const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootpass',
  database: 'users'
});

const selectAll = (callback) => {
  connection.query('SELECT * FROM userInfo', function (err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const insertPerson = (userInfo, callback) => {
  connection.query('INSERT INTO userInfo(firstName, lastName, email, password, type) VALUES (?,?,?,?,?);',
  [userInfo.firstName, userInfo.lastName, userInfo.email, userInfo.password, userInfo.type],
  (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}



module.exports.selectAll = selectAll;
module.exports.insertPerson = insertPerson;