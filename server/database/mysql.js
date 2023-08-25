import mysql from 'mysql2';

import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOSTNAME,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE_NAME,
}).promise();

export async function getData() {
    return await pool.query("SELECT * FROM users;");
}

export async function checkUser(username, password) {
    const [rows] = await pool.query("SELECT * FROM users WHERE username = ? AND password = ?;", [username, password]);
    return rows;
}

export async function insertUser(fname, lname, username, password) {
    await pool.query("INSERT INTO users (fname, lname, username, password) VALUES(?, ?, ?, ?)", [fname, lname, username, password]);
}