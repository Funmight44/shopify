import { Link } from "react-router-dom";
import { useCart } from "../context";
import { useAuth0 } from "@auth0/auth0-react";

const Card = ({item}) => {
     const { loginWithRedirect, isAuthenticated} = useAuth0();
     const {addToCart} = useCart()

    return ( 
                  <div className="product-cont">
                        <div className="img-Box">
                             <Link to={`/product/${item.id}`}><img src={item.image} alt="img"/></Link>
                            <div className="product-icons">
                                {isAuthenticated ? <i class="bi bi-cart" onClick={() => addToCart(item)}></i> :
                                 <i class="bi bi-cart" onClick={() => loginWithRedirect()} ></i> }
                                <Link to={`/product/${item.id}`}><i class="bi bi-eye"></i></Link>
                                <i class="bi bi-heart"></i>
                            </div>
                        </div>
                        
                        <div className="product-detail">
                            <p>{item.category}</p>
                            <h3>{item.productName}</h3>
                            <span>${item.price}</span>
                        </div>
                    </div>
     );
}
 
export default Card;