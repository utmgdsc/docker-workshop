const express = require("express");
const { Pool } = require("pg");
const bodyParser = require("body-parser");
const process = require('process');
const cors = require('cors');

// create a new Express app server object
const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// set the port for the Node application
const port = process.env.PORT;

// create a client instance of the pg library
const client = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});

app.get('/posts', async (req, res) => {
    try {
        const response = await client.query('SELECT * FROM posts;');
        const { rows } = response;
        res.json(rows);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

app.post('/post', async (req, res) => {
    const { message, subject, author } = req.body;
    try {
        await client.query('INSERT INTO posts(subject, message, author) VALUES($1, $2, $3)', [subject, message, author]);
    } catch(e) {
        res.sendStatus(500);
        return;
    }
    res.sendStatus(200);
});

var server = app.listen(port, function () {
    console.log(`\nPostgres Node server is running on port: ${server.address().port}`)
});
