var db = require("../db/db.json")
var uniqid = require('uniqid')
var fs = require('fs');
var path = require('path')

module.exports = function(app) {

    app.get("/api/notes", function(req,res){
        res.json(db)
    });

    app.post("/api/notes", function(req,res){
        const id = uniqid()
        const newNote = req.body;
        newNote.id = id;
        db.push(newNote);
        res.json(db);
        dbJ = JSON.stringify(db)
        dbA = [dbJ]
        fs.writeFile("./db/db.json", dbA, function(err){
            if (err) throw err;
            console.log("SAved")
        })
        
    });

    app.delete("/api/notes/:id", function(req,res){
       const newNoteIndex = db.findIndex(function(note){
        return note.id === req.params.id;   
       });
       const filtered = db.splice(newNoteIndex);
       res.json(filtered);
       filteredJ = JSON.stringify(filtered)
       filteredA = [filteredJ]
       fs.writeFile("./db/db.json", filteredA, function(err){
        if (err) throw err;
        console.log("SAved")
    })
    })

}