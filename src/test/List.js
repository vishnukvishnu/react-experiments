import React, {useContext} from 'react'
import { ListContext } from './ToDo'

const List = () => {
    
    const {list, nameListDispatch} = useContext(ListContext)
    return (
        <>
        {list.map((val, i) => (
             <ul key={i}>
                <li>{val.name}</li>
                <li>{val.age}</li>
                <li><button onClick={()=> nameListDispatch({id:val.id, type:'DELETE'})}>Delete Todo</button></li>
            </ul>
         ))} 
        </>
    )}


export default List