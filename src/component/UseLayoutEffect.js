const { useState, useEffect, useLayoutEffect } = require("react")

const CountNumber = () => {
    const[number, setNumber] = useState(0);

    useLayoutEffect(() => {
        if (number > 3) setNumber(0)
        console.log('effect ' + number);
    }, [number])

    const countNumber = () => {
        setNumber(number +1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={countNumber}>Run</button>
            {console.log('render ' + number)}
        </div>
    )
}

const UseLayoutEffect = () => {
    const[check, setCheck] = useState(false);

    return (
        <div>
            <button onClick={() => setCheck(!check)}>Toggle</button>
            {check && <CountNumber />}
        </div>
    )
}

export default UseLayoutEffect;