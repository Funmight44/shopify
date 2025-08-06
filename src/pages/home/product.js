import { useState } from "react";
import Card from "../../components/card";
import { productData } from "../../data";
import UseTitle from "../../components/useTitle";

const Products = () => {
  const [products, setProducts] = useState(productData);
  UseTitle("Product")

  const filterProducts = (category) => {
    const filtered = productData.filter((item) => item.category.toLowerCase() === category.toLowerCase());
    setProducts(filtered);
  };

  const showAllProducts = () => {
    setProducts(productData); // Reset to full list
  };

  return (
    <section className="product-section">
      <h2>Products</h2>
      <p>Home.Products</p>
      <div className="product">
        <div className="container">
          <div className="filter">
            <div className="category">
              <h3>categories</h3>
              <ul>
                <li onClick={showAllProducts}>All Products</li>
                <li onClick={() => filterProducts("phone")}>Phones</li>
                <li onClick={() => filterProducts("laptop")}>Laptops</li>
                <li onClick={() => filterProducts("headphones")}>Headphones</li>
              </ul>
            </div>
          </div>
          <div className="product-box">
            {products.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
