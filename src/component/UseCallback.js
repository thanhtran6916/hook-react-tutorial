const { useState, memo, useCallback, useRef } = require("react")

// sử dụng memo để tránh component con re-render
const Content = memo(({ onCount }) => {
    return (
        <>
            <h2>Đếm số</h2>
            <button onClick={onCount}>Count</button>
        </>
    )
})

const UseCallBack = () => {
    const [number, setNumber] = useState(0);

    // useCallback tránh tạo ra một hàm mới một cách không cần thiết
    let handleCount = useRef();
    handleCount = () => {
        setNumber(prev => prev +1);
    }

    return (
        <>
            <Content onCount={handleCount}></Content>
            <h3>{number}</h3>
        </>
    )
}

export default UseCallBack;