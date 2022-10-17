const express = require('express');
const mysql = require("mysql")
const dotenv = require('dotenv')

const app = express();
app.set('view engine', 'hbs')

dotenv.config({ path: './.env'})

const path = require("path")
const publicDir = path.join(__dirname, './public')

app.use(express.static(publicDir))
const bcrypt = require("bcryptjs")
app.use(express.urlencoded({extended: 'false'}))
app.use(express.json())

app.post("/auth/register", (req, res) => {    
    const { name, email, password, password_confirm } = req.body

    // db.query() code goes here
})

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    port: process.env.DATABASE_PORT,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

db.connect((error) => {
    if(error) {
        console.log(error)
    } else {
        console.log("MySQL connected!")
    }
})

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/register", (req, res) => {
    res.render("register")
})

app.get("/login", (req, res) => {
    res.render("login")
})

app.listen(5000, ()=> {
    console.log("server started on port 5000")
})
