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

const selectAllFiles = (callback) => {
  connection.query('SELECT * FROM pageInfo', function (err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const selectAllClasses = (callback) => {
  connection.query('SELECT * FROM classInfo', function (err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

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

const insertFile = (docName, s3Link, uploadDate, callback) => {
  connection.query('INSERT INTO pageInfo (documentName, documentLink, uploadTime) VALUES (?, ?, ?);',
  [docName, s3Link, uploadDate],
  (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

const insertClass = (classObject, callback) => {
  connection.query('INSERT INTO classInfo(classTitle, daysOfClass, timeOfClass, location) VALUES (?,?,?,?);',
  [classObject.classTitle, classObject.daysOfClass, classObject.timeOfClass, classObject.location],
  (err, results) => {
    if(err){
      callback(err, null);
    }else{
      callback(null, results);
    }
  })
}



module.exports.selectAll = selectAll;
module.exports.selectAllFiles = selectAllFiles;
module.exports.insertPerson = insertPerson;
module.exports.insertFile = insertFile;
module.exports.insertClass = insertClass;
module.exports.selectAllClasses = selectAllClasses;