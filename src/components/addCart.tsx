import React from "react";
import { useCart } from "../context/cart";


export const AddCart = () => {
const data = useCart();

const total = data?.cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="cart">
            <h3>Cart</h3>
            { data && data.cart.map((item, index) => (
                <li key={index}>{item.name} - ${item.price}</li>
            ))}
           
<h5> Total Bill is : ${total} </h5>
        </div>
    )
}
