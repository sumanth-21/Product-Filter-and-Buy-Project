import React from 'react';

import classes from './CategoryFilterList.css';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import Button from '../UI/Button/Button';

const categoryFilterList = (props) => (
    <div className={classes.productFilterContainer}>
        <p><strong>Filter:</strong></p>
        {props.categoryList.map( category => (
            <CategoryFilter
                key = {category}
                category={category}
                checked= {props.checked}
                />
        ) )}
        <Button 
                btnType="Success"
                clicked={props.onPurchase}>Buy Now</Button>
    </div>
);

export default categoryFilterList;