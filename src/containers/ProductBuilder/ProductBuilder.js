import React, { useState } from 'react';

import Aux from '../../hoc/Wrap/Wrapper';
import Product from '../../components/Product/Product';
import ProductPurchased from '../../components/ProductPurchased/ProductPurchased';
import CategoryFilterList from '../../components/CategoryFilterList/CategoryFilterList';
import Modal from '../../components/UI/Modal/Modal';
import classes from './ProductBuilder.css';

const productBuilder = props => { 

    const [products, setProducts] = useState([ 
        { 
        "name":"Potato", 
        "id":1, 
        "price":30, 
        "available":1, 
        "vendor":"Himachal Pvt Ltd", 
        "category":"Vegtables" 
        }, 
        { 
        "name":"Banana", 
        "id":2, 
        "price":50, 
        "available":1, 
        "category":"Fruits",
        "vendor": "Organic farms"
         
        }, 
        { 
        "name":"Drumsticks", 
        "id":3, 
        "price":20, 
        "available":0, 
        "category":"Vegetables", 
        "vendor":"Mallikarjuna farms"
        }, 
        { 
        "name":"Orange", 
        "id":4, 
        "price":25, 
        "available":1, 
        "vendor":"Nagpur farms", 
        "category":"Fruits" 
        } 
        ] );
    
    const [filter, setFilter] = useState([]);
    const [purchase, setPurchaseState] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    
    const checkBoxHandler = (event) => {
        let category = event.target.value;
        if(event.target.checked) {
            if(!filter.includes(category)) {
                setFilter( arr => [...arr, category])
            }
        }
        else {
            if(filter.includes(category)) {
                setFilter( filter.filter(item => item !== category))
            }
        }
    };

    const onSelectHandler = (e, productId) => {
        const updatedProduct = [...products];
            updatedProduct[productId - 1].quantity = e.target.value;
        setProducts( updatedProduct )
        setTotalPrice(totalPrice + (products[productId - 1].price*products[productId - 1].quantity));
    };

    const onPurchaseHandler = () => {
        setPurchaseState(true)
    };

    const purchaseCancelHandler = () => {
        setPurchaseState(false)
    };

    const categorySet = new Set();
        products.forEach( product => {
            categorySet.add(product.category);
        }
        );
    let myCategoryArr = Array.from(categorySet)

    let productList = products.map( product => {
        if(filter.length === 0 || filter.includes(product.category)) {
            return (            
            <Product
                key = {product.id}
                name = {product.name}
                price = {product.price}
                vendor = {product.vendor}
                availablity = {product.available}
                onSelect = {(e) => onSelectHandler(e, product.id)}
                />
                );
        }
     } );
    

    let orderSummary = products.map( product => {
                    if(product.quantity > 0) {
                        return (            
                        <ProductPurchased
                            key = {product.id}
                            name = {product.name}
                            price = {product.price}
                            quantity = {product.quantity}
                            />
                            );
                    }
                } );

    return (
        <Aux>
            <Modal show={purchase} modalClosed={purchaseCancelHandler}>
                <p><strong>Invoice:</strong></p>
                {orderSummary}
                <p><strong>Total Price: ${totalPrice} </strong></p>
            </Modal>
            <div className={classes.productListContainer}>
                <div>
                    {productList}
                </div>
                <CategoryFilterList
                    categoryList ={myCategoryArr}
                    checked= {checkBoxHandler}
                    onPurchase = {onPurchaseHandler}
                    />

            </div>
        </Aux>
    );
}

export default productBuilder;