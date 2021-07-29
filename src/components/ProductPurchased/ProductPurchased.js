import React from 'react';

import classes from './ProductPurchased.css';

const productPurchased = (props) => (
    <div className={classes.productPurchased}>
        <p className={classes.productName}>{props.name}</p>
        <p className={classes.productValue}>{props.quantity} x ${props.price}</p>
    </div>
);

export default productPurchased;