import express from "express"

//creates an Express application instance
const app = express();

app.get("/api/notes", (req, res) => {
    res.send("server notes not yet added");
});


app.listen(5001, ()=>{
    console.log("Server is listening on PORT 5001")
});


