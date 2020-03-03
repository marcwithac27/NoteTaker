var noteData = require('../data/noteData');


module.exports = function(app) {

    app.get("/api/index", function(req,res){
        res.json(noteData)
    });

    app.post("/api/notes", function(req,res){
        noteData.push(req.body)
    });

    app.delete("/api/notes", function(req,res){
        noteData.delte(req.body)
    })

}