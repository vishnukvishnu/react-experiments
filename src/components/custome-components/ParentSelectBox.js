import React, { useState } from 'react'
import SelectBox from './SelectBox'

function ParentSelectBox() {
    const [list, setList] = useState([
        {id:0, value:'optoin0'},
        {id:1, value:'optoin1'},
        {id:2, value:'optoin2'},
    ])
    const [selctedVal, setSelectedVal] = useState({id:2, value:'optoin2'})
    const setSelectHandler = (val) =>{
        setSelectedVal(val)
    }
    return (
        <div>
            <SelectBox 
            setSelectedVal={setSelectHandler}
            selctedVal={selctedVal}
            list={list}/>
        </div>
    )
}

export default ParentSelectBox
