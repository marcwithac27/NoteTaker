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
        newnoteJ = JSON.stringify(newNote)
        fs.appendFile("/db/db.json", newnoteJ, function(err){
            if (err) throw err;
            console.log("Saved")
        })
        
        
    });

    app.delete("/api/notes/:id", function(req,res){
       const newNoteIndex = db.findIndex(function(note){
        return note.id === req.params.id;   
       });
       const filtered = db.splice(newNoteIndex);
       res.json(filtered);
    })

}