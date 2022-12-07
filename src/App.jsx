import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const initialState = 0;
  const reducer = (state , action) => {
    if(action.type === "Increase"){
      return state + 1;
    }else if( action.type === "Decrease"){
      return state - 1;
    }else{
      return state;
    }

  }
  const [state , dispatch] = useReducer(reducer ,initialState )

  return (
    <div className="App">
      <div className="card mx-auto w-96 bg-indigo-50">
  <div className="card-body text-center justify-center items-center">
    <h2 className="card-title">Card title!</h2>
    <p>Count :{state} </p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={() => dispatch({type:"Increase"})}>Increase</button>
      <button className="btn btn-secondary" onClick={() => dispatch({type:"Decrease"})}>Decrease</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default App
