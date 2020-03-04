var db = require("../db/db.json")
var uniqid = require('uniqid')
var fs = require('fs');

module.exports = function(app) {

    app.get("/api/notes", function(req,res){
        res.json(db)
    });

    app.post("/api/notes", function(req,res){
        const id = uniqid()
        const newNote = req.body;
        newNote.id = id;
        db.push(newNote);
        res.json(db)
        
        
    });

    app.delete("/api/notes/:id", function(req,res){
       const newNoteIndex = db.findIndex(function(note){
        return newNote.id === req.params.id;   
       });
       db.slice(newNoteIndex, 0);
       res.json(db);
    })

}