import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import "./CreateBook.css"

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate() //to navigate to a route after finishing

  const handleSaveBook = () => {
    const data = {
      title, 
      author,
      publishYear
    }
    setLoading(true)
    axios.post("http://localhost:5555/books", data)
    .then( () => {
      setLoading(false)
      navigate("/")
    }).catch((err) => {
      console.log(err)
      alert("error happened")
      setLoading(false)
    } )
  }

  return (
    <div className="main-container">
      <BackButton/>
      <h1>Create Book</h1>
      {loading ? (<Spinner/>) : ' '}
        <div className="formContainer">

          <div className="form">
            <label className="label">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="input" />
          </div>

          <div className="form">
            <label className="label">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input" />
          </div>


          <div className="form">
            <label className="label">Publish Year</label>
            <input
              type="number"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="input" />
          </div>

          <button className="button" onClick={handleSaveBook}>Save</button>

        </div>
    </div>
  )
}

export default CreateBook
