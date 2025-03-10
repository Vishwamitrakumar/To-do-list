import React from 'react'
import { useState } from 'react'
import './cantainer.css'

const create = () => {
const [data , setFormData] = useState('')



  return (
    <div className="cantainer" >
    <div className='cantainer-form '>
      <form  >
        <label  className='mx-3'>Title:</label><br/>
        <input type="text" placeholder='Enter Title' className='int m-3 ' required/>
        <br/>
        <label  className='mx-3' >Description:</label>
        <br/>
        <textarea type="text" placeholder='Enter Description' className='int m-3' required/><br/>
        <label   className='mx-3' >image:</label><br/>
        <input type="file" placeholder='Enter image' className='m-3 int '   required/><br/>
        <button class='btn primary m-3'> Submit</button>
        </form>
    </div>
    </div>
  )
}

export default create


