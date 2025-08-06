const Footer = () => {
    return ( 
        <footer>
            <div className="footer-cont">
                <div className="logo">
                    <img src="/images/logo.png" alt="img"/>
                    <div className="detail">
                        <p>We sell quality and durable gadgets in an Affordable price.</p>
                        <div className="icons">
                             <i class="bi bi-facebook"></i>
                             <i class="bi bi-instagram"></i>
                             <i class="bi bi-linkedin"></i>
                             <i class="bi bi-twitter"></i>
                        </div>
                    </div>
                </div>
                <div className="my-account">
                    <h4>My Account</h4>
                    <div>
                        <p>Account</p>
                        <p>Order</p>
                        <p>Shopping</p>
                        <p>Return</p>
                        
                    </div>
                </div>
                <div className="pages">
                    <h4>Pages</h4>
                    <div>
                        <p>Home</p>
                        <p>Contacts</p>
                        <p>About</p>
                        <p>Terms and Conditions</p>
                    </div>
                </div>
            </div>
            <h2>@copyrite Funmight44 2025</h2>
        </footer>
     );
}
 
export default Footer;