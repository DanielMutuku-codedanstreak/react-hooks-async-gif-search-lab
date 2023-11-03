import React from 'react'
import GifSearch from './GifSearch'
import GifList from './GifList'

export default function GifListContainer(props) {
    //console.log(props.gif)
    //console.log(props.gif[0].images)
    //console.log(props.gif[0].images.original)
    //function to get 3 gifs before display
    const getRandomGifs = () => {
        const shuffledGifs = props.gif.sort(() => 0.5 - Math.random());
        return shuffledGifs.slice(0, 3);
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                {
                    getRandomGifs().map((gifData, index) => (
                        <GifList key={index} gifyOriginal={gifData.images.original}></GifList>
                    ))
                }
            </div>
            <div className='col-md-6'>
                <GifSearch onFilter={props.onFilter}></GifSearch>
            </div>
        </div>
    </div>
  )
}
