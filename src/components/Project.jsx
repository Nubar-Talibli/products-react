import { useEffect, useState } from 'react';
import Products from './Products';
import { Skeleton } from 'antd';

function Project() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    async function getProducts() {
        let elements = await fetch('https://dummyjson.com/products').then(res => res.json());
        setProducts(elements.products);
        setLoading(false);
    }
    
    useEffect(()=>{
        setLoading(true);
        getProducts();
    }, [])


    return (
        <div>
            <Skeleton active={true} loading={loading} style={{padding: "50px"}}></Skeleton>
            <Skeleton active={true} loading={loading} style={{padding: "50px"}}></Skeleton>
            <Skeleton active={true} loading={loading} style={{padding: "50px"}}></Skeleton>
            {!loading && <Products allProducts={products}></Products>}
        </div>
    )
}

export default Project