import React, {useState} from 'react'

function ParentCounter({render}) {
    
    const [count, setCount] = useState(0)
    const addCounter = (val = 0) => {
        console.log(val)
        setCount(count + val)
    }
    return (
        <div>
            <h1>Parent Counter</h1>
            {}
            {render(count, addCounter)}
            <hr />
        </div>
    )
}

export default ParentCounter
