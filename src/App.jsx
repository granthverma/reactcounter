import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
// set value of counter  useState koi bhi value defaluts value
//two value  first - count
// setcount Second - its fnf is variable updated karne ke liya  man lo yhi main source hai 
  // let helpful hai counter app ke liya 


  const addValue = () => {
    if (counter <100) {
      counter =  counter+1
      setCounter(counter)

      
    } else {
      alert("You've reached the maximum value (100)!");
      
    }
// add value concept easy hai only function lena callback name kuch bhi ho sakta hai 
// assignment mile tha value 100 tk (20 tha but 100 le liya ) ek loop lekar  counter< 100 se ho jaya 
// ek add on alert bhi le liya  value reach then alert message 
  } ;


  const removeValue = () => {

    if (counter > 0) {
      counter =  counter-1
     setCounter(counter)
      
    }  else {
      alert("You've reached the minimum value (0)!");
      
    }
    

    
  } ;

  // some concept like add on 

  
  const ResetValue = () => {
    
    counter = 0 ;
    setCounter(counter)
    
  };
// reset value  counter = 0 le li  now reset hota hai zero aa jayegi 
  return (
    <>
      
      <h1>The-Counter</h1>
      <h2>Counter Value :{counter} </h2>
      <h3> The Counter count the value  0 to 100</h3>


      <button onClick={addValue}>Increment </button>
      
     <button onClick={removeValue}>decrement</button>
      
        
<br/>
      <button onClick={ResetValue}> Reset Value</button> 
    </>
  )
}


// hooks is updated hoga data  , import { useState } from 'react' yhi se aata hooks 

export default App
