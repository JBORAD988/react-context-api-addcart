import React from "react";
import { useCart } from "../context/cart";

interface ItemProps {
    name: string;
    price: number;
}

export const Item = (props: ItemProps) => {
    const cartList = useCart();

    const data = props;

    if (!cartList) {
        return null; 
    }

    const { cart, setCart } = cartList;

    const handleAddToCart = () => {
        setCart([...cart, { name: data.name, price: data.price }]); //first we copy the old added data from cart and then push new data with it         
    };

    return (
        <div className="item-card">
            <h4>{data.name}</h4>
            <p> Price: ${data.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};
