import { Routes, Route } from "react-router";
import HomePage from "./pages/home/homepage";
import Products from "./pages/home/product";
import Search from "./components/search";
import ProductDetailCard from "./components/productDetailCard";
import CartList from "./pages/home/cartList";
import OrderSuccess from "./pages/home/orderSuccess";
import Contact from "./pages/home/contact";

const AllRoutes = () => {
    return ( 
        <main>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/product/:id" element={<ProductDetailCard/>}/>
                <Route path="/cart" element={<CartList/>}/>
                <Route path="/success" element={<OrderSuccess/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </main>
       
     );
}
 
export default AllRoutes;