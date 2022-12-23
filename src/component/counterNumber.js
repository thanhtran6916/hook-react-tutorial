const { useState } = require("react")

const CounterNumber = () => {
    const [counter, setCounter] = useState(1);
    const counterHandler = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            <h2>{counter}</h2>
            <button onClick={counterHandler}>counter</button>
        </>

    )
}

export default CounterNumber;