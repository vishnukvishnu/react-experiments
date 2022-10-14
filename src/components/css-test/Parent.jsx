import React, {useState} from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

const Parent = () =>{
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Parent</h1>
            <ChildA count={count} updateCount={setCount}/>
            <ChildB />
        </div>
    )
}

export default Parent
