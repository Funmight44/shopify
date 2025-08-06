import { useState } from "react";
import UseTitle from "../../components/useTitle";

const Contact = () => {
     UseTitle("Contact")
     const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "39cacce3-4b3e-4c6c-a5f5-176459dbb196");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

   return (  
        <section>
            <div className="contact">
                <div className="content">
                    <h3>#Contact</h3>
                    <form onSubmit={onSubmit}>
                        <input type="text" name="name" placeholder="Name" required/>
                        <input type="email" name="email" placeholder="Email Address" required/>
                        <input type="text" name="subject" placeholder="Enter your Subject" required/>
                        <textarea type="text" name="message" placeholder="Enter Your message" required/>
                        <button type="submit">Send</button>
                        <span>{result}</span>
                   </form>
                </div>
            </div>
        </section>
    );
} 
 
export default Contact;