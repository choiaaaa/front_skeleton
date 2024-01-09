const mysql = require('mysql2/promise')

let pool

module.exports = function getPool(){
  if(pool){
    return pool
  }
  //초기
  const config = {
    host: process.env.DB_URL,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 10
  }
  return mysql.createPool(config)
}