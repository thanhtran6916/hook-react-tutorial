import { useEffect, useState } from "react";

const UseEffect = () => {
    const resources = ['posts', 'comments', 'albums'];
    const [tab, setTab] = useState('posts');
    const [contents, setContents] = useState([]);
    const [goToTop, setGoToTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${tab}`)
            .then(res => res.json())
            .then(contents => setContents(contents));
    }, [tab]);

    useEffect(() => {
        const handleScroll = () => {
            setGoToTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleScroll)
    }, [])
    return (
        <div>
            {console.log(goToTop)}
            <h2>Show list</h2>
            {resources.map((resource) => (
                <button
                    key={resource}
                    onClick={() => setTab(resource)}
                >
                    {resource}
                </button>
            ))}
            <ul>
                {contents.map(content => (
                    <li key={content.id}>{content.title || content.name}</li>
                ))}
            </ul>
            {goToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}
                >
                    goToTop
                </button>
            )}
        </div>
    )
}

const Toggle = () => {
    const [check, setCheck] = useState(false);

    return (
        <div>
            <button onClick={() => setCheck(!check)}>Toggle</button>
            {check && <UseEffect />}
        </div>
    )
}

export default Toggle;