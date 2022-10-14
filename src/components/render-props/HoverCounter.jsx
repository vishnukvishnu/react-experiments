import React from 'react'

function HoverCounter({count, addCounter}) {
    return (
        <div>
            <h1>Hover Counter - {count}</h1>
            <button onMouseOver={() =>addCounter(10)}>Hover</button>
        </div>
    )
}

export default HoverCounter
