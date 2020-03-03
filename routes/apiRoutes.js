var db = require("../db/db.json")
var uniqid = require('uniqid')

module.exports = function(app) {

    app.get("/api/notes", function(req,res){
        res.json(db)
    });

    app.post("/api/notes", function(req,res){
        const newNote = req.body;
        const id = uniqid()
        newNote.id = id;
        db.push(newNote)
        res.json(newNote)
    });

    app.delete("/api/notes", function(req,res){
        noteData.delte(req.body)
    })

}