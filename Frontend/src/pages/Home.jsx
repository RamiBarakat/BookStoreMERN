import React, { useState, useEffect } from 'react'
import axios from "axios"
import Spinner from '../components/Spinner'
import { Link } from "react-router-dom"
import { MdOutlineAddBox, MdOutlineDelete, MdOutlineEdit } from "react-icons/md"
import { BsInfoCircle } from "react-icons/bs"
import './Home.css'


const Home = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:5555/books')
            .then(res => {
                setBooks(res.data.data)
                setLoading(false)
            }).catch(err => {
                console.log(err)
                setLoading(false)
            })

    }, [])


    return (
        <div className='home-container'>
            <div className='book-list'>
                <h1>Books List</h1>
                <Link to='/books/create'>
                    <MdOutlineAddBox className="" />
                </Link>
            </div>
            {loading ? (<Spinner />) : (
                <table className='table'>
                    <thead>
                        <tr>
                            <th className="th1">No</th>
                            <th className="th1">Title</th>
                            <th className='th2'>Author</th>
                            <th className='th2'>Publish Year</th>
                            <th className='th1'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>

                        {books.map((book, index) => (
                            <tr className='tr2'>
                                <td key={books._id} className='td1'> {index + 1} </td>
                                <td className='td1'> {book.title}</td>
                                <td > {book.author}</td>
                                <td > {book.publishYear}</td>

                                <td>
                                    <div>
                                        <Link to={`/books/details/${book._id}`}>
                                            <BsInfoCircle />
                                        </Link>
                                        <Link to={`/books/edit/${book._id}`}>
                                            <MdOutlineEdit />
                                        </Link>
                                        <Link to={`books/delete/${book._id}`}>
                                            <MdOutlineDelete />
                                        </Link>

                                    </div>
                                </td>


                            </tr>

                        ))}

                    </tbody>

                </table>
            )}


        </div>
    )
}

export default Home
