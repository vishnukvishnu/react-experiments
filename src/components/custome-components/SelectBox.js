import React from 'react'

function SelectBox({ list = [],selctedVal,setSelectedVal }) {
    return (
        <div>
            <h1>Select Box</h1>
            <select onChange={(e) => setSelectedVal(e.target.value)} value={selctedVal.value}>
                {
                  list.map(val => <option key={val.id}>{val.value}</option>)
                }
            </select>

            <div>
                <div onClick={(e) => setSelectedVal(e.target.value)} value={selctedVal}> 
                {
                    list.map(val => <span key={val.id}>{val.value}</span>)
                }
                </div>

            </div>
        </div>
    )
}

export default SelectBox