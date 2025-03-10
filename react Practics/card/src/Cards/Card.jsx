import React from 'react'
import { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import "./Card.css"

function card(props) {
  const [like, setLike] = useState(false);
  const [coun, setCount] = useState(0);
 
  const handleLike = () => {
    if (!like) {
      setLike(true);
      setCount(coun + 1);
    }
    else {
      setLike(false);
      setCount(coun - 1);
    }
  }
  return (
    <div className="row row-cols-md-3 m-5">
      <div className="col ">
        <div className="card" onDoubleClick={handleLike}>
          <img src={props.imgsrc} className="card-img-top" alt="Not-image" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.card_title}</p>
            <button className='btn'> Show More </button>
            {like ? (<CiHeart size={30} onClick={handleLike} style={{ cursor: 'pointer' }} className="text-danger" />) : (
              <CiHeart size={30} onClick={handleLike} style={{ cursor: 'pointer' }} />
            )}
            <p>All Likes in your Cards {coun} </p>
         
          </div>
        </div>
      </div>
    </div>
  )
}

export default card
