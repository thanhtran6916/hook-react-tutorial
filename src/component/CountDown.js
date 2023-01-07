import { useEffect, useState } from "react";

function CountDown() {
    const [countDown, setCountDown] = useState(180);
    useEffect(() => {
        const timeId = setInterval(() => {
            setCountDown(prevState => prevState -1);
        }, 1000)

        // clean up function
        return () => clearInterval(timeId)
    }, [])
    return (
        <h2>{countDown}</h2>
    )
}

export default CountDown;