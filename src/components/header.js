import { FaTruckMoving } from "react-icons/fa";
import { Link, useNavigate, useSearchParams } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useCart } from "../context";

const Header = () => {
    const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
    const [searchParams] = useSearchParams()
    const navigate = useNavigate();

     const [query, setQuery] = useState(searchParams.get("query") || "");
     const {cart} = useCart()

     function searchProducts(){
        if(!query.trim) return;

        navigate(`/search?query=${encodeURIComponent(query)}`)
     }


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
                         <Link to="/cart" className="Link"> <i class="bi bi-cart"></i></Link>
                     </div>   
                     <span>{cart.length}</span>  
                </div>
            </nav>
            <div className="bottom-nav">
                <div className="nav-bar">
                    <Link to="/" className="Link"><p>Home</p></Link>
                    <Link to="/products" className="Link"><p>Products</p></Link>
                    <Link to="/about" className="Link"><p>About</p></Link>
                    <Link to="/contact" className="Link"><p>Contact</p></Link>
                </div>
                <div className="log-cont">
                    {isAuthenticated ? <i class="bi bi-box-arrow-in-right" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}></i>
                      : <i class="bi bi-box-arrow-in-left" onClick={() => loginWithRedirect()}></i>}   
                </div>
            </div>
        </header>
     );
}
 
export default Header;