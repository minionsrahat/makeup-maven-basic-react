import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {

    const [products, setProducts] = useState([])

    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart)

    }


    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-9 p-2 col-sm-12">
                        <div className="row">
                            <h1>Total Products:{products.length}</h1>
                             {
                                products.map((product)=>{
                                return  <Product  key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>
                              })


                             }

                        </div>

                    </div>
                    <div className="col-lg-3 p-2 col-sm-12">
                        <h1>Order Side</h1>
                        <p>Total Cart Length: {cart.length}</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Shop;