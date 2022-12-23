import { useState } from "react";

function UseState() {
    const [cars, setCars] = useState(['honda', 'toyota', 'suzuki']);

    const addCar = () => {
        setCars((prevState) => {
            return [...prevState, 'ford']
        })
    }
    return (
        <>
            <ul>
                {cars.map((car) => {
                    return <li>{car}</li>
                })}
            </ul>
            <button onClick={addCar}>Add</button>
        </>
    )
};

export default UseState;