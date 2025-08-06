import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseTitle from "../../components/useTitle";


const OrderSuccess = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const state = location.state
    UseTitle("Order Success")
  
  useEffect(() => {
    if (!state) {
        return navigate("/")};
  }, [state, navigate])

  if(!state) return null
  const{fullName, email} = state;

  return (
    <section className="order-success">
      <div className="order-box">
        <h2>✅ Order Confirmed!</h2>
        <p className="greeting">Thank you <strong>{fullName}</strong> for your purchase!</p>
        <div className="order-details">
          <p><strong>Order ID:</strong>AUTO_GENERATED</p>
          <p><strong>Payment ID:</strong> xyz_123456789</p>
          <p><strong>Delivery Email:</strong> {email}</p>
          <p className="note">Please check your inbox for your products and order receipt.</p>
        </div>
        <Link to="/" className="btn-continue">
          <i className="bi bi-cart"></i> Continue Shopping
        </Link>
      </div>
    </section>
  );
};

export default OrderSuccess;
