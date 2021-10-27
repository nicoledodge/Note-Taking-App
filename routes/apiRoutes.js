//get
//post
//delete

// CREATE (get), READ (post), UPDATE (put), DELETE (delete) => CRUD

const app = require("express").Router();
const dbjson = require('../db/db.json');
const uniqid = require ("uniqid");
const fs = require('fs');

app.get("/notes", (req, res) => {
    console.log(dbjson);
    res.json(dbjson)
})

//POST routes to notes
app.post("/notes", (req, res) => {
    req.body.id = uniqid()
    dbjson.push(req.body)
    fs.writeFile(__dirname, "/../db/db.json", JSON.stringify(dbjson), err => {
        if(err) throw (err)
    })
    res.end()
})

module.exports = app;