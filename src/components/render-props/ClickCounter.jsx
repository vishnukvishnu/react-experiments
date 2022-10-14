import React from 'react'

function ClickCounter({count, addCounter}) {
    return (
        <div>
            <h1>Click Counter - {count}</h1>
            <button onClick={() => addCounter(5)}>Click</button>
        </div>
    )
}

export default ClickCounter
