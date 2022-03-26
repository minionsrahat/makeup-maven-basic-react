import React from 'react';
import './Cart.css';
import { AiTwotoneDelete } from 'react-icons/ai';

const Cart = (props) => {
    const {image_link,name, id}=props.product;
    return (
        <>
        <div className="cart">
            <div className="img-section">
                <img src={image_link} alt="" />
            </div>
            <div className="cart-details">
                <p>
                    {name}
                </p>

            </div>
            <div className="delete-btn">
               <AiTwotoneDelete className='delete-icon' onClick={()=>props.deleteItemFromCart(id)}></AiTwotoneDelete>
            </div>
        </div>
        
        
        </>
    );
};

export default Cart;