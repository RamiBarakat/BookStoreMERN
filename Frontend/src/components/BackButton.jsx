import React from 'react'
import { Link } from "react-router-dom"
import { BsArrowLeft } from 'react-icons/bs'
import "./BackButton.css"

const BackButton = ({destination = '/'}) => {
  return (
    <div>
        <Link to={destination} className ="back">
            <BsArrowLeft className='textSize' />
        </Link>
      
    </div>
  )
}

export default BackButton
