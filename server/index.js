var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Anirudh$2002',
  database : 'HROperationsManager'
});

connection.connect();

var id = "id1001";
var name = "ani"

connection.query(`INSERT INTO applicant (id, name) VALUES ('${id}', '${name}')`, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.end();