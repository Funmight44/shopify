import { createContext, useContext, useEffect, useState } from "react";

const cartContext = createContext();


export function useCart(){
    const context = useContext(cartContext)
    return context
};

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState();

        useEffect(() => {
            const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
            setCart(savedCart);
        }, []);

        // Save cart to localStorage whenever it changes
        useEffect(() => {
            localStorage.setItem("cart", JSON.stringify(cart));
        }, [cart]);

        const addToCart = (item) => {
            setCart((prev) => {
            const updatedCart = [...prev, item];
            localStorage.setItem("cart", JSON.stringify(updatedCart)); // ensure sync
            return updatedCart;
            });
        };

        function removeFromCart(id){
            const updatedCart = cart.filter((item) => item.id !== id);
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart)) //keep storage in syn
            alert("Removed")
        }


        function clearCart(){
            setCart([])
            localStorage.removeItem("cart")
        }

       useEffect(()=> {
          const totalProduct = cart.reduce((sum, item) => {
                return sum + parseFloat(item.price)
            }, 0 )
            setTotal(totalProduct)
       }, [cart])

    return ( 
            <cartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, total, setCart}}>
                {children}
            </cartContext.Provider>
     );
}
 