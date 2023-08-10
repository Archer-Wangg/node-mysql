import mysql from 'mysql2'

export const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'wasd1234',
    database: 'post'
  })