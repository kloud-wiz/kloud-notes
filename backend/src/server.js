import express from "express"
import notesRoute from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

dotenv.config();

//creates an Express application instance
const app = express();
const PORT = process.env.PORT || 5001;

// Mongodb connection call
connectDB();

// middleware
app.use(express.json())

app.use("/api/notes", notesRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
});
