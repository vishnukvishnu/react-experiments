import React,{useState} from 'react'

const Rating = () =>{
    const [ratingState, setRatingState] = useState(null)
    const [hoverState, setHoverState ] = useState(null)
    return (
        <>
        <h2>Rating component</h2>
        {
            [...Array(10)].map((val,index) => {
                let ratingIndex = index + 1
                return (
                    <>
                    <label>
                    <input type='radio'
                    className='radio-btn' 
                    name='rating'
                    value={ratingIndex}
                    onClick={()=> {setRatingState(ratingIndex)}}
                    />

                    <span 
                    className={ratingIndex <= (ratingState || hoverState) ? 'star lime-bg':'star gray-bg' }
                    onMouseEnter={() => setHoverState(ratingIndex)}
                    onMouseLeave={() => setHoverState(null)}
                    > </span>
                    </label>
                    </>
                ) 
            })
        }
        </>
    )
}

export default Rating