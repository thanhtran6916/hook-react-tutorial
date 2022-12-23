import { useState } from "react";

const grifs = ['core i9', 'man hinh', 'ram'];

const RandomGrif = () => {
    const [grif, setGrif] = useState();

    const getGrif = () => {
        let index = Math.floor(Math.random() * grifs.length)
        setGrif(grifs[index]);
    }
    return (
        <>
            <h2>{grif || "Chưa có phần thưởng"}</h2>
            <button onClick={getGrif}>Lấy thưởng</button>
        </>
    )
}

export default RandomGrif;