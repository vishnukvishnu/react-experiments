import React, {useReducer} from 'react'
import './App.css'
import ComponentX from './components/context/ComponentX';
import CounterOne from './components/use-reducer/CounterOne';
import CounterTwo from './components/use-reducer/CounterTwo'
import CounterTree from './components/use-reducer/CounterThree'
import ComponentA from './components/context-reducer/ComponentA'
import ComponentB from './components/context-reducer/ComponentB'
import ComponentC from './components/context-reducer/ComponentC'
import DataFetchingUseEffect from "./components/fetch-use-reducer/DataFetchingUseEffect"
import Class from './components/class-components/Class'
import ParentComponent from './components/use-callback/ParentComponent'
import Counter from './components/use-memo/Counter'
import Parent from './components/css-test/Parent'
import UserForm from './components/custome-hook/UserForm'
import Random_V1 from './components/custome-hook/random-gif/Random_V1'
import Tag_V1 from './components/custome-hook/random-gif/Tag_V1'
import RouteParent from './components/routing/RouteParent'
import ParentCounter from './components/render-props/ParentCounter'
import HoverCounter from './components/render-props/HoverCounter'
import ClickCounter from './components/render-props/ClickCounter'
import ParentSelectBox from './components/custome-components/ParentSelectBox'
import ToDo from './test/ToDo'
import Rating from './components/Rating'

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CountContext = React.createContext();


const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}




function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
     <h1>React Application</h1>
     {/* <Rating /> */}
     {/* <ToDo /> */}
     {/* <UserContext.Provider value={'Vishnu'}>
       <ChannelContext.Provider value={"Vishnu Fitnes"}>
            <ComponentX />
       </ChannelContext.Provider>
     </UserContext.Provider> */}
     <hr />
     {/* <CounterOne /> */}
     {/* <CounterTwo /> */}
     {/* <CounterTree /> */}
     {/* <CountContext.Provider value={{countState:count, countDispatch:dispatch}}>
       <h1>Count - {count}</h1>
     <ComponentA />
     <ComponentB />
     <ComponentC /> 
     </CountContext.Provider> */}
     {/* <DataFetchingUseEffect /> */}
     {/* <Class test={'tesingdsfasdfsd'} />  */}
      {/* <ParentComponent /> */}
     {/* <Counter /> */}
     {/* <UserForm /> */}
     {/* <div className='main-container'>
      <Random_V1 />
      <Tag_V1 />
     </div> */}
      <ParentCounter render={(count, addCounter)=> <ClickCounter count={count} addCounter={addCounter} />}/>
      <ParentCounter render={(count, addCounter)=> <HoverCounter count={count} addCounter={addCounter}/>}/> 
      {/* <RouteParent />
      {/* <ParentSelectBox /> */}
      {/* <Parent /> */}
    </div>
  );
}
   
export default App;
