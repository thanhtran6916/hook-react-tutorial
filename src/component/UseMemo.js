import { useMemo, useState } from "react";

const UseMemo = () => {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [products, setProducts] = useState([])

    

    const total = useMemo(() => {
        const handleTotal = products.reduce((result, product) => {
            console.log('re-render')
            return result + product.price; 
        }, 0)
        return handleTotal;
    }, [products]);

    const addProduct = () => {
        let product = {
            name: name,
            price: +price
        }
        
        if (product.name && product.price) {
            setProducts([...products, product])
        }
    }
    return (
        <>
            <h2>Thêm mới sản phẩm</h2>
            <input onChange={e => setName(e.target.value)} placeholder="Enter name..."></input>
            <br />
            <input onChange={e => setPrice(e.target.value)} placeholder="Enter price..."></input>
            <br />
            <button onClick={addProduct}
            >
                Add
            </button>
            <p>Total: {total}</p>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{`${product.name}, ${product.price}`}</li>
                ))}
            </ul>
        </>
    )
}

export default UseMemo;