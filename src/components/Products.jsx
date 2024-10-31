import React from 'react';
import Product from './Product';

function Products({allProducts}) {
    
    return (
        <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr"}}>
            {
                allProducts.map((item)=>{
                    return <Product key={item.id} allItem={item}></Product>
                })
            }
        </div>
    );
}

export default Products