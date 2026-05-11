import express from "express"

//creates an Express application instance
const app = express();

app.get("/api/notes", (req, res) => {
    res.status(200).send("You have 50 notes");
});

app.post("/api/notes", (req, res) => {
    res.status(201).json({message: "Note added successfully"});
});

app.put("/api/notes/:id", (req, res) => {
    res.status(200).json({message: "Note updated successfully"})
});

app.delete("/api/notes/:id", (req, res) => {
    res.status(201).json({message: "Note deleted successfully"})
})


app.listen(5001, ()=>{
    console.log("Server is listening on PORT 5001")
});


