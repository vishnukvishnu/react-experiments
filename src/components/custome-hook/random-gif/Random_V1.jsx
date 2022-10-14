import React, {useEffect, useState} from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY


const Random_V1 = () => {

    const [gif, setGif] = useState('')
    const fetchGif = async () => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}` 
        const {data} = await axios.get(url)
        const imageSrc = data.data.images.downsized_large.url
        setGif(imageSrc)
    }
    useEffect(() => {
        fetchGif()
    }, [])
    const handleClick = () =>{
        fetchGif()
    }
    return (
        <div className='container'>
            <h1>Random Gif</h1>
            <img width="500" src={gif} alt="Random GIF" />
            <button onClick={handleClick}>Click For New</button>
        </div>
    )
}

export default Random_V1