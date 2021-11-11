//get
//post
//delete

// CREATE (get), READ (post), UPDATE (put), DELETE (delete) => CRUD

const router = require('express').Router();
let dbjson = require('../db/db.json');
const uniqid = require ("uniqid");
const fs = require('fs');
const path = require("path");

router.get('/notes', (req, res) => res.json(dbjson));

//POST routes to notes
router.post('/notes', (req, res) => {

    req.body.id = uniqid();
    dbjson.push(req.body)
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(dbjson));
    return res.status(200).json(dbjson)
})

router.delete('/notes/:id', (req, res) => {
    console.log("hello")

    // return res.status(200).json(req);

    let newNote = []
    newNote = dbjson
    const deletedId = req.params.id
    // delete a category by its `id` value
    dbjson = dbjson.filter(note => {
        return deletedId !== note.id;
    })
    fs.writeFile(__dirname, '/../db/db.json', JSON.stringify(dbjson), err => {
        if(err) throw (err)
    })
// });
});

module.exports = router;