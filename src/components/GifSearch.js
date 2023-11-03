import React from 'react'
import { useState } from 'react';

export default function GifSearch(props) {
    const [formData, setFormData] = useState('')
    //function to submit search data entry
    const handleSubmit =((e)=>{
        e.preventDefault()

        //console.log(formData)
        props.onFilter(formData)
    })

  return (
    <>
        <form className="d-flex mb-3" role="search" onSubmit={handleSubmit}>
            <label>Enter a Search Term:</label>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={formData} onChange={(e)=> {setFormData(e.target.value)}} required/>
            <button type="submit" className="btn btn-success">Find Gifs</button>
        </form>
    </>
  )
}
