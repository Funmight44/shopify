import { createContext, useContext, useEffect, useState } from "react";

const cartContext = createContext();


export function useCart(){
    const context = useContext(cartContext)
    return context
};

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState()
       
    function addToCart(product){
            setCart((item) => [...item, product])
            alert("Added")
        }

        function removeFromCart(id){
            setCart(cart.filter((item) => item.id !== id))
            alert("Removed")
        }


        function clearCart(){
            setCart([])
        }

       useEffect(()=> {
          const totalProduct = cart.reduce((sum, item) => {
                return sum + parseFloat(item.price)
            }, 0 )
            setTotal(totalProduct)
       }, [cart])

    return ( 
            <cartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, total}}>
                {children}
            </cartContext.Provider>
     );
}
 