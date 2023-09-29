import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { decrement, increment,reset } from './counter/counterSlice';

function App() {
 const count =useSelector(state => state.counter.value)
 console.log(count);

 const dispatch= useDispatch()

  return (
    <>
   <h3>{count}</h3>
   <button onClick={()=>dispatch(increment())}>Increment</button>

   <button onClick={()=> dispatch (decrement())}>Decrement</button>
   
   <button onClick={()=> dispatch (reset())}>Reset</button>
   
  
    </>
  )
}

export default App
