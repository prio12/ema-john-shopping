import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const handleAddToCart = props.handleAddToCart
    const {img, name, price,seller,ratings} =props.product;
   
    return (
        <div className='product'>
            <img src={img} alt="A Shoe" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Manufacturer: {seller}</small></p>
            <p><small>Rating: {ratings}</small></p>
             </div>
             <button onClick={() =>handleAddToCart(props.product)} className='product-btn'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
             
        </div>
    );
};

export default Product;