import express from "express"
import notesRoute from "./routes/notesRoutes.js"

//creates an Express application instance
const app = express();

app.use("/api/notes", notesRoute);

app.listen(5001, () => {
    console.log("Server is listening on PORT 5001")
});


