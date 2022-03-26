import React from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import './Product.css'



const Product = (props) => {
  //  console.log(props.product);
  const { image_link, name, price, brand, rating } = props.product;
  return (
    <>
      <div className="col-lg-4 col-sm-12 p-3">
        <div className="card shadow">
          <img className="card-img-top" src={image_link} alt="" />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <hr />
            <p className="card-text"> <strong> Brand:</strong> {brand}</p>
            <p className="card-text"> <strong> Price:</strong> {price}$</p>
            <p className="card-text"> <strong> Rating:</strong> {rating}</p>
            <div className="text-center">
              <div className="d-grid gap-2 p-2">
                <button type="button" onClick={() => props.handleAddToCart(props.product)}
                  className="btn btn-primary btn-lg btn-block add-to-cart-btn ">Add To Cart
                  <BsFillCartPlusFill className='ms-1'></BsFillCartPlusFill>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;