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
    fs.writeFile(__dirname, '/../db/db.json', JSON.stringify(dbjson), err => {
        if(err) throw (err)
    })
    res.end()
});

app.delete('/api/notes/:id', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {

        let filtered;
        if (err) {
            console.error(err);
        } else {

            const currentNoteID = req.params.id;

            const notes = JSON.parse(data);

            filtered = notes.filter(note => note.id !== currentNoteID);

            fs.writeFile('../db/db.json', JSON.stringify(filtered, null, 4), (writeErr) =>
                writeErr
                    ? console.error(writeErr)
                    : console.info('Successfully updated notes!')
            );

        }
    });
});

module.exports = app;