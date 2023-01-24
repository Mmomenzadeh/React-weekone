import React ,{useState} from 'react'
import "../assets/styles/counter.css"
const Counter  = ({InitialCount}) =>{
    const [count , setCount] = useState(InitialCount)
    return(
        
        <div className='counter-container'> 
            count :{count}
            <button onClick={()=>{setCount(InitialCount)}}>reset</button>
            <button onClick={()=>{setCount(prevCount => prevCount +1)}}>+</button>
            <button onClick={()=>{setCount(prevCount => prevCount -1)}}>-</button>

        </div>
    )
}


export default Counter 