import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="d-flex justify-between align-center p-40">
        <div>
          <h4>ABOUT</h4>
          <ul>
            <li>Our Purpose</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Stores</li>
          </ul>
        </div>
        <div>
          <h4>CUSTOMER SERVICE</h4>
          <ul>
            <li>Help</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Your Orders</li>
          </ul>
        </div>
        <div>
          <h4>CONTACT US</h4>
          <ul>
            <li>+44 (0)333 323 7728</li>
            <li>Email Us</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
