import React, {useReducer, createContext, useState} from 'react'
import List from './List'

export const ListContext = createContext();
const initialValue = [
  {id:0, name:'John', age: 30},
  {id:1, name:'Doe', age: 28},
  {id:2, name:'Ram', age: 25},
]


const reducers = (state, payload) =>{
  switch(payload.type) {
      case 'DELETE': 
       let updatedList = state.filter(val => val.id !== payload.id)
       return updatedList
      case 'ADD': 
      let updatedState = [...state, payload.val]
       return updatedState
      default:
          return state
  }
}


const ToDo = () =>{
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [nameListState, nameListDispatch] = useReducer(reducers, initialValue)
  const submitHandler = () =>{
    let obj = {name:name, age: age}
    nameListDispatch({val: obj, type:'ADD'})
  }
  
    return (
      <ListContext.Provider value={{list:nameListState, nameListDispatch:nameListDispatch}} >

      <h1>Todo List</h1>
      <input val={name} onChange={(e) => setName(e.target.value)}/><br />
      <input val={age} onChange={(e) => setAge(e.target.value)}/><br />
      <button onClick={submitHandler}>Submit</button>
      <List />
      </ListContext.Provider>
    )

}

export default ToDo