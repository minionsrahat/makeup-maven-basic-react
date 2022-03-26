import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Modal from 'react-modal';
import './Shop.css'



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const Shop = () => {

    const [products, setProducts] = useState([])

    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleAddToCart = (product) => {
        const exist = cart.find((oldProduct) => oldProduct.id === product.id)
        if (!exist) {
            const newCart = [...cart, product];
            setCart(newCart)
        }
        else {
            alert("Your Selected Product Already  In the cart")
        }
    }

    const deleteItemFromCart = (id) => {
        const newCart = cart.filter((oldProduct) => oldProduct.id !== id)
        setCart(newCart)
    }


    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

  //  const [randNum, setRandNum] = useState(0)


    const chooseOneProduct = () => {
        const newRandNum = getRandomInt(cart.length);
        if(cart.length>0)
        {
    //    setRandNum(newRandNum);
        const newCart = cart.filter((oldProduct) => oldProduct.id ===cart[newRandNum].id)
        setCart(newCart)
        }
        openModal();
       
    }
    const clearCart = () => {
        const newCart = [];
        setCart(newCart)
    }



    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-9 p-2 col-sm-12">
                        <div className="product-container">
                            <div className="row">
                                <h5 className='text-center product-size-title'>Total Products:{products.length}</h5>
                                {
                                    products.map((product) => {
                                        return <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>
                                    })


                                }
                            </div>
                        </div>


                    </div>
                    <div className="col-lg-3 p-2 col-sm-12 ">
                        <div className="cart-container sticky-lg-top">
                            <h5 className='order-title text-center'>Order Summary</h5>
                            <p className='cart-size text-center'>Total Product in Cart: {cart.length}</p>
                            <div className="container mt-2">
                                {
                                    cart.map((product) => {

                                        return <Cart key={product.id} product={product} deleteItemFromCart={deleteItemFromCart} ></Cart>
                                    })
                                }
                            </div>
                            <div className="container py-2">
                                <div className="d-grid gap-2 p-2">
                                    <button className="btn btn-success" type="button" onClick={chooseOneProduct}>Choose One For Me </button>
                                    <button className="btn btn-danger" type="button" onClick={clearCart}>Choose Again</button>
                                </div>
                            </div>
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >
                                <h5 className='text-center'>This Product Will be best for you.</h5>
                                <hr />
                                {
                                    cart.length > 0 ? <div className="cart-modal">
                                        <div className="img-section">
                                            <img src={cart[0].image_link} alt="" />
                                        </div>
                                        <div className="cart-details">
                                            <p>
                                                <strong>{cart[0].name}</strong>

                                            </p>
                                            <p>
                                                Price: {cart[0].price}
                                            </p>
                                            <p>
                                                Ratings: {cart[0].rating}
                                            </p>
                                        </div>
                                    </div>
                                        : <div className="cart">
                                            <p>Sorry!!! No Products Available in the cart to choose</p>
                                        </div>
                                }

                            </Modal>
                        </div>



                    </div>

                </div>
            </div>

        </div>
    );
};

export default Shop;