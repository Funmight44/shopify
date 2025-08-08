import { Link } from "react-router";
import { useCart } from "../../context";
import { useState } from "react";
import CheckOut from "../../components/checkout";
import UseTitle from "../../components/useTitle";

const CartList = () => {
    const {cart, clearCart, removeFromCart, total} =useCart();
    const [checkout, setCheckout] = useState(false)

    UseTitle("CartList")

    return ( 
        <section className="cart-cont">
            <h4>Cart</h4>
            {cart.length === 0 &&  (<div className="empty-cart">
                <p>Cart is empty</p> <Link to="/products" className="Link">Shop Now</Link>
            </div>)}


           { cart.map((item) => 
           ( <div className="cartCard" key={item.id}>
                <img src={item.image} alt="img"/>
                <h4>{item.productName}</h4>
                <p>${item.price}</p>
                <button className="removeCart-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>) )}

                <p>Total: {total}  </p>
            <div className="cart-btns"> 
                <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
                {cart.length === 0 ? <button disabled className="order-btn-disable"onClick={() => setCheckout(!checkout)}>Place Order</button>:
                <button className="order-btn"onClick={() => setCheckout(!checkout)}>Place Order</button>}
            </div>
            {checkout && <CheckOut setCheckout={setCheckout}/>}
        </section>
     );
}
 
export default CartList;