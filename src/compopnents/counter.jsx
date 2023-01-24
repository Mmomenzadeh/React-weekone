import React ,{useState} from 'react'
import "../assets/styles/counter.css"
const Counter  = () =>{
    const [count , setCount] = useState(0)
    return(
        
        <div className='counter-container'> 
            count :{count}
            <button onClick={()=>{setCount(0)}}>reset</button>
            <button onClick={()=>{setCount(prevCount => prevCount +1)}}>+</button>
            <button onClick={()=>{setCount(prevCount => prevCount -1)}}>-</button>

        </div>
    )
}


export default Counter 