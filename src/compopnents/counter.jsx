import React ,{useState} from 'react'
import "../assets/styles/counter.css"
const Counter  = (props) =>{
    const [count , setCount] = useState(props.InitialCount)
    return(
        
        <div className='counter-container'> 
            count :{count}
            <button onClick={()=>{setCount(props.InitialCount)}}>reset</button>
            <button onClick={()=>{setCount(prevCount => prevCount +1)}}>+</button>
            <button onClick={()=>{setCount(prevCount => prevCount -1)}}>-</button>

        </div>
    )
}


export default Counter 