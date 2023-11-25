import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import "./ShowBook.css"

const ShowBook = () => {
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:5555/books/${id}`)
        .then(res => {
            setBook(res.data)
            setLoading(false)
        }).catch(err => {
            console.log(err)
            setLoading(false)
        })

}, [])



  return (
    <div class="container">
      <BackButton />
      <h1>Book Details</h1>
      {loading ? (<Spinner />) : (
        <div className="infoContainer">
          <div className="info">
            <span className="info1">id</span>
            <span>{book._id}</span>
          </div>

          <div className="info">
            <span className="info1">Title</span>
            <span>{book.title}</span>
          </div>

          <div className="info">
            <span className="info1">Author</span>
            <span>{book.author}</span>
          </div>

          <div className="info">
            <span className="info1">Publish Year</span>
            <span>{book.publishYear}</span>
          </div>

          <div className="info">
            <span className="info1">Create Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>

          <div className="info">
            <span className="info1">Last Update Time</span>
            <span>{book.publishYear}</span>
          </div>


        </div>
      )}
      
    </div>
  )
}

export default ShowBook
