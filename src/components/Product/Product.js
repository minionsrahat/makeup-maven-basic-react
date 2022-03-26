import React from 'react';

const Product = (props) => {
  //  console.log(props.product);
    const {image_link,name,price,brand,rating}=props.product;
    return (
      <>
      <div className="col-lg-4 col-sm-12 p-2">
            <div className="card">
                <img className="card-img-top" src={image_link} alt=""/>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">Price: {price}</p>
                    <p className="card-text">Ratings: {rating}</p>
                    <div className="text-center">
                   <button type="button"onClick={()=>props.handleAddToCart(props.product)}  className="btn btn-primary btn-lg btn-block">Add To Cart</button>
                    </div>
                </div>
            </div>
      </div>
      </>
    );
};

export default Product;