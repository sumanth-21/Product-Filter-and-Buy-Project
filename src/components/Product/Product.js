import React from 'react';

import classes from './Product.css';
import productImage from '../../assets/images/blog5.png';

const product = (props) => (
    <div className={classes.productContainer}>
        <div className={classes.productImage}>
            <img src={productImage} />
            <div className={classes.productStock}>
                <p>{props.availablity ? "in-stock" : "out-of-stock"}</p>
            </div>
        </div>
        <div className={classes.productDetails}>
            <div className={classes.Label}><strong>Product Name: </strong>{props.name}</div>
            <div className={classes.Label}><strong>Price:</strong> ${props.price}</div>
            <div className={classes.Label}><strong>Vendor: </strong>{props.vendor}</div>
            { props.availablity ? 
            <div>
                <label for="quantity">Select quantity:</label>
                <select name="quantity" id="quantity" onChange= {props.onSelect.bind(this)}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div> : null
            }
        </div>
    </div>
);

export default product;