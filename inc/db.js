  const mysql = require('mysql2');

  const connection = mysql.createConnection({
      host: 'localhost',
      user: 'user',
      database: 'saboroso',
      password: 'ASL@jj191308'

  });

  module.exports = connection;