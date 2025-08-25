import { FaTruckMoving } from "react-icons/fa";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useCart } from "../context";



const Header = () => {
    const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
    const [searchParams] = useSearchParams()
    const navigate = useNavigate();
    const {cart, setCart} = useCart()

     const [query, setQuery] = useState(searchParams.get("query") || "");
  

     function searchProducts(){
        if(!query.trim) return;

        navigate(`/search?query=${encodeURIComponent(query)}`)
     }

     useEffect(() => {
        if(isAuthenticated){
            const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
            setCart(savedCart)
        }
     }, [isAuthenticated, setCart])


    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0)


    return ( 
        <header>
            <div className="top-nav">
                <div className="shipping-icon">
                    <div><FaTruckMoving/></div>
                    <p>FREE Shipping when upto $10,000</p>
                </div>
            </div>
            <nav>
                <div className="logo-container">
                    <h3>Shopify</h3>
                    <img src="/images/logo.png" alt="logo"/>
                </div>
                <div className="search-container">
                    <input className="search-input" type="text" placeholder="Enter the search product"
                     autoComplete="off" value={query} onChange={(e) => setQuery(e.target.value)}/>
                    <button onClick={searchProducts}>Search</button>
                </div>
                {isAuthenticated && 
                    <div className="user-icon-cont">
                    <i class="bi bi-person"></i>
                    <p>Hello, {user.name}</p>
                </div>}
                
                <div className="icons">
                     <Link to="/" className="Link"><i class="bi bi-balloon-heart" ></i></Link> 
                     <div className="cart-link">
                        {isAuthenticated ? (<><Link to="/cart" className="cart-icon-with-badge"> <i class="bi bi-cart"></i></Link>
                            <span className="cart-badge">{totalQuantity}</span>  </>):
                        (<i class="bi bi-cart" onClick={() => loginWithRedirect()}></i>)}
                     </div>       
                </div>
            </nav>
            <div className="bottom-nav">
                <div className="nav-bar">
                    <Link to="/" className="Link"><p>Home</p></Link>
                    <Link to="/products" className="Link"><p>Products</p></Link>
                    {/* <Link to="/about" className="Link"><p>About</p></Link> */}
                    <Link to="/contact" className="Link"><p>Contact</p></Link>
                </div>
                <div className="log-cont">
                    {isAuthenticated ? <i class="bi bi-box-arrow-in-right" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>logout</i>
                      : <i class="bi bi-box-arrow-in-left" onClick={() => loginWithRedirect()}>login</i>}   
                </div>
            </div>
        </header>
     );
}
 
export default Header;