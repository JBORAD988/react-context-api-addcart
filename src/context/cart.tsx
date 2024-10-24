import React, { createContext, useState } from "react";

interface CartContextType {
    cart: Array<{name: string; price: number }>; 
    setCart: React.Dispatch<React.SetStateAction<Array<{ name: string; price: number }>>>;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
    children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<Array<{  name: string; price: number }>>([]); 

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};
