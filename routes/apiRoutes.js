var noteData = require("../db/db.json");
var uniqid = require('uniqid')

module.exports = function(app) {

    app.get("/api/notes", function(req,res){
        res.json(db)
    });

    app.post("/api/notes", function(req,res){
        const newNoteData = req.body;
        const id = uniqid()
        newNoteData.id = id;
        db.push(newNoteData)
        res.json(newNoteData)
    });

    app.delete("/api/notes", function(req,res){
        noteData.delte(req.body)
    })

}