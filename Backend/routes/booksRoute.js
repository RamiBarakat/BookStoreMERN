import express from "express"
import { Book } from "../models/bookModel.js"

const router = express.Router()


router.get("/", async (req, res) => {
    try {
        const books = await Book.find({})
        return res.status(200).json({
            count: books.length,
            data: books
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: err.message })
    }
})

//get books by id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params

        const books = await Book.findById(id)
        return res.status(200).send(books)
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: err.message })
    }
})


//Route to update a book
router.put("/:id", async (req, res) => {
    try {

        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: err.message })
        }
        const { id } = req.params
        const result = await Book.findByIdAndUpdate(id, req.body)


        if (!result) {
            return res.status(404).send({ message: "Book not found" })
        } else {
            return res.status(200).send({ message: "successful" })
        }
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: err.message })
    }
})


//delete a book
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const result = await Book.findByIdAndDelete(id)
        if (!result) {
            return res.status(404).send({ message: "Book not found" })
        } else {
            return res.status(200).send({ message: "successful" })
        }

    } catch (err) {
        console.log(err)
        res.status(500).send({ message: err.message })
    }
})


//mongoose is async
router.post("/", async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: err.message })
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        }

        const book = await Book.create(newBook)
        return res.status(201).send(book)

    } catch (err) {
        console.log(err)
        res.status(500).send({ message: err.message })
    }

})

export default router;