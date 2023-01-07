import { useRef, useState } from "react";

const UseRef = () => {
    const[count, setCount] = useState(0);
     let time = useRef();
    const handleStart = () => {
        time.current = setInterval(() => {
            setCount(prev => prev + 1)
        }, 1000);
        console.log(time.current)
   }

    const handleStop = () => {
        console.log(time.current);
        clearInterval(time.current)
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}

export default UseRef;