import React, {useEffect, useState} from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY


const Tag_V1 = () => {

    const [tag, setTag] = useState('')
    const [gif, setGif] = useState('')
    const fetchGif = async (tag) => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}` 
        const {data} = await axios.get(url)
        const imageSrc = data.data.images.downsized_large.url
        setGif(imageSrc)
    }
    useEffect(() => {
        fetchGif()
    }, [])
    const handleClick = () =>{
        fetchGif(tag)
    }
    return (
        <div className='container'>
            <h1>Random {tag} Gif</h1>
            <img width="500" src={gif} alt="Random GIF" />
            <input value={tag} onChange={e => setTag(e.target.value)} type="text"/>
            <button onClick={handleClick}>Click For New</button>
        </div>
    )
}

export default Tag_V1