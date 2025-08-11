import { useNavigate } from "react-router";
// import { useCart } from "../context";
import { useState } from "react";

const CheckOut = ({setCheckout}) => {
    // const {cart} = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName:"",
        email: "",
        address: "",
        number: ""
    });

    function handleChange(e){
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        const {fullName, address, email, number} = formData
        if(!fullName || !address || !email || !number){
            alert("Enter your details")
            return
        }

        navigate("/success", {state: formData})
    }


    return ( 
        <div className="modal-overLay">
            <div className="checkout-detail">
                <p className="close-btn" onClick={() => setCheckout(false)}> <i class="bi bi-x"></i></p>
                <h4>Checkout</h4>
                <form onSubmit={handleSubmit}>
                  <div>
                    <p>Hello</p>
                    <label> Full Name  </label>  
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}/>
                  </div>
                     <div>
                        <label> Email Address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                     </div>
                    <div>
                         <label>  Home Address </label>
                        <input type="address" name="address" value={formData.address} onChange={handleChange}/>
                   
                    </div>
                    <div>
                         <label> Phone Number</label>
                        <input type="number" name="number" value={formData.number} onChange={handleChange}/>
                    </div>
                    <button type="submit">Proceed</button>
                </form>
            </div>
        </div>
     );
}
 
export default CheckOut;