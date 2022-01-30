import React, { useState } from 'react'
import './App.css'
import InputFeild  from './components/inputFeild';

const App: React.FC = () => {

  const [todo, setstate] = useState("");

  return (
    <div className="App">
     <span className='heading'>Taskify</span>
     <InputFeild/>
    </div>
  )
}

export default App
function initialState(initialState: any): [any, any] {
  throw new Error('Function not implemented.');
}

