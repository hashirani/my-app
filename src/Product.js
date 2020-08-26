import React from 'react'
import "./Product.css";
import { useStatevalue } from './StateProvider';

function Product({id,price,title,image,rating}) {
    const [{basket},dispatch ] = useStatevalue();

    const addToBasket = () => { 

        //Add to  item basket 
        dispatch({
            type:"Add to basket",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
        

    };
    return (
        <div className="product">
            <div className="product__info"> 
            <p>{title}</p>
            <p className="product__price">
             <small>$</small>
             <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) =>(
                       <p>⭐</p> 
                    ))
                }

            </div>
            </div>
           
            <img src={image}
            alt="img"/>
            <button onClick={addToBasket}>Add the basket</button>

        </div>
    )
}

export default Product
