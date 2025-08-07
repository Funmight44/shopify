import { Link } from "react-router";
import { useState } from "react";
import { useParams } from "react-router";
import { productData } from "../data";
import { useCart } from "../context";



const ProductDetailCard = () => {
  const {addToCart, removeFromCart} = useCart()
  
  const [quantity, setQuantity] = useState(1);
  const {id} = useParams()

  const products = productData.find((item) => item.id === id);

  function increase(){
    setQuantity((prev) => prev + 1 )
  }

  function decrease(){
    setQuantity((prev) => prev > 1 ?  prev - 1 : 1)
  }




  if (!products) return null; 

  return (
    <section className="product-detail-card">
      <div className="product-image">
        <img src={products.image} alt={products.productName} />
      </div>

      <div className="product-info">
        <h1>{products.productName}</h1>
        <p className="product-description">{products.productDescription}</p>

        <div className="product-meta">
          <p><strong>Price:</strong> ${products.price}</p>
          <p><strong>Category:</strong> {products.category}</p>
          {/* <p><strong>Sizes:</strong> {products.size ? products.size.join(", ") : "No size available"}</p> */}
          <p><strong>{products.inStock ? "inStock ✅" : "Out Of Stock ❌"}</strong></p>
        </div>

        <div className="quantity-btns">
          <button className="minus-btn" onClick={decrease}><i class="bi bi-dash"></i></button>
          <h3>{quantity}</h3>
          <button className="plus-btn" onClick={increase}><i class="bi bi-plus"></i></button>
        </div>

        <div className="action-buttons">
          <Link to="/cart"><button className="add-btn" onClick={() => addToCart(products)}>🛒 Add {quantity} to Cart</button></Link>
          <button className="remove-btn" onClick={() => removeFromCart(products.id)}>🗑️ Remove</button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailCard;
