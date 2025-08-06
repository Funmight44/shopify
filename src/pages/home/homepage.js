import { Link } from "react-router";
import { productStockData } from "../../data";
import { productData } from "../../data";
import { useEffect, useState } from "react";
import Card from "../../components/card";
import UseTitle from "../../components/useTitle";

const HomePage = () => {
    const [product, setproduct] = useState([]);
    UseTitle("Home")

    useEffect(() => {
        const data = productData.slice(0, 8)
        setproduct(data)
    }, [])

    return ( 
        <section>
            <div className="top-banner">
                <div className="container">
                    <div className="detail">
                        <h2>The Best Note Book Collection 2025</h2>
                        <Link to="/products"><button>Shop Now<i class="bi bi-arrow-right"></i></button></Link>
                    </div>
                    <div className="img-box">
                        <img src="/images/headphone10.jpg" alt="images"/>
                    </div>
                </div>
            </div>

            <div className="product-type">
                {productStockData.map((product) => (
                <div className="box" key={product.id}>
                    <div className="img-box">
                        <img src={product.image} alt="img" className="product-img"/>
                    </div>
                    <p>{product.quantity} products</p>
                </div>
                ))}
            </div>

            <div className="about">    
                <div className="about-box">
                    <i class="bi bi-truck"></i>
                    <div className="details">
                        <h2>Free Shipping</h2>
                        <p>Order above 20,000</p>
                    </div>
                </div>
                <div className="about-box">
                    <i class="bi bi-currency-dollar"></i>
                    <div className="details">
                        <h2>Return and Refund</h2>
                        <p>Money back guaranteee</p>
                    </div>
                </div>
                <div className="about-box">
                    <i class="bi bi-currency-dollar"></i>
                    <div className="details">
                        <h2>Membership discount.</h2>
                        <p>On every order</p>
                    </div>
                </div>
                <div className="about-box">
                   <i class="bi bi-headphones"></i>
                    <div className="details">
                        <h2>Customer Support.</h2>
                        <p>every time call support</p>
                    </div>
                </div>
            </div>
            <h2 className="top-products">Top Products</h2>
            <div className="products">
                {product.map((item) => <Card key={item.id} item={item}/>)}
            </div>
            <div className="banner">
                <div className="banner-cont">
                    <div className="banner-detail"> 
                        <h4>LASTEST TECHNOLOGY ADDED</h4>
                        <h3>Apple Ipad 10.2 10th Gen - 2024</h3>
                        <p>$2000</p>
                        <Link to="/products"><button>Shop Now <i class="bi bi-arrow-right"></i></button></Link>
                    </div>
                    <div className="banner-img">
                        <img src="/images/laptop2.jpg" alt="img"/>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default HomePage;