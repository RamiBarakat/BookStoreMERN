import express from "express";
import { PORT, mongoDBURL } from "./configs.js"
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js"
import cors from "cors"

const app = express();

//CORS policy
app.use(cors())



//middleware to parse the data
app.use(express.json())

app.get("/", (req, res) => {
    console.log(req)
    return res.status(234).send('welcommme')

})

app.use("/books", booksRoute)

mongoose
    .connect(mongoDBURL)
    .then(() => {
        app.listen(PORT, () =>{
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })