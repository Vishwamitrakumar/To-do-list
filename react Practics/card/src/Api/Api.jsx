import React, { useState } from 'react'
import { useEffect } from 'react';
import "./Api.css"
const Api = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    ApiData();
  }, [])
  const ApiData = async () => {
    const responce = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET"
    })
    const result = await responce.json();
    setData(result);
  }

  function deleteFun(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
    { method: "DELETE" })
    .then((data) => {
      data.json()
      .then((res) => {
        console.log("Delete Succesfully", res)
      
      })
    })
  }
  return (

    <>
      <div className='grid'>
        {data.map((post) => {
          const { id, title, body } = post;
          return (

            <div className='card offset-3' key={id}>
              <h2>{id}</h2>
              <h2>{title}</h2>
              <p>{body}</p>
              <button onClick={() => deleteFun(id)}>Delete</button>
            </div>
          )
        })}
      </div>
    </>

  )
}

export default Api
