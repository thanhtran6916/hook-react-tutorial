import { useEffect, useState } from "react";

const ChooseAvatar = () => {
    const [urlAvatar, setUrlAvatar] = useState();

    useEffect(() => {
        console.log(urlAvatar);
        return () => {
            console.log("clean")
            urlAvatar && URL.revokeObjectURL(urlAvatar.preview);
        }
    }, [urlAvatar])
    const handleAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setUrlAvatar(file);
    }

    return (
        <div>
            <input onChange={handleAvatar} type="file" />
            {urlAvatar && (<img src={urlAvatar.preview} alt="" />)}
        </div>
    )
}

const PreviewAvatar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <ChooseAvatar />}
        </div>
    )
}

export default PreviewAvatar;