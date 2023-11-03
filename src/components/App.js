import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import GifListContainer from './GifListContainer'
// the App component should render out the GifListContainer component

function App() {
  const [myQuery, setMyQuery] = useState('')
  const [gif, setGif] = useState([])
  const API_URL = `https://api.giphy.com/v1/gifs/search?q=${myQuery}&api_key=b6IOJXEB33Ra78rxA2JcdTq3wqf6vkTp&rating=g`
  const handleFilter =((searchTerm)=>(
    //console.log(searchTerm)
    setMyQuery(searchTerm)
  ))
  //function to render our gifs
  useEffect(()=>{
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setGif(data.data))
    .catch(error =>{
      console.log(`Error fetching gifs,${error}`)
    })
  },[myQuery])
  //console.log(gif)

  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer onFilter={handleFilter} gif={gif}></GifListContainer>
    </div>
  );
}

export default App;
