import React, { useState } from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import '.././Shop.css';

export default function TomeiOutlet() {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = async () => {
    try {
      const product = {
        title: 'Tomei Expreme V2 Turbine Outlet | 2001-2006 Mitsubishi Evo 7-9',
        price: 621.0,
        description: 'The increased diameter and flow capacity improves exhaust efficiency whilst reducing secondary exhaust pressure. The ver.2 was developed to cope with the demands of advanced 4G63 tuning. In addition, the 74% overall weight reduction improves the vehicle’s responsiveness.',
      };

      const cartItem = {
        product: product,
        quantity: quantity,
      };

      const response = await fetch('http://localhost:8000/cart-items/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItem),
      });

      if (response.ok) {
        console.log('Item added to cart:', cartItem);
        // Update the cart items state
        setCartItems([...cartItems, cartItem]);
        // Perform any additional actions after successfully adding the item to the cart
      } else {
        console.log('Error adding item to cart:', response.statusText);
      }
    } catch (error) {
      console.log('Error adding item to cart:', error);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="itemblock">
        <div className="leftblock">
          <div className="item-img">
            <img src="tomei-outlet.jpg" className="rounded" width="500" height="500" alt="Item" />
          </div>
        </div>
        <div className="rightblock">
          <div>
            <h2 className="item-name">Tomei Expreme V2 Turbine Outlet | 2001-2006 Mitsubishi Evo 7-9</h2>
            <p className="item-brand">Tomei</p>
            <p className="item-brand">Part Number: (CH-TO79)</p>
            <p className="item-price">$621.00</p>
            <div>
              <button className="quantity" onClick={decrementQuantity}>-</button>
              <p className="quantity">Quantity: {quantity}</p>
              <button className="quantity" onClick={incrementQuantity}>+</button>
              <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
            </div>
            <div>
              <h3 className="features-title">Description</h3>
              <div className="description">
                <p>
                  The increased diameter and flow capacity improves exhaust efficiency whilst reducing secondary exhaust
                  pressure. The ver.2 was developed to cope with the demands of advanced 4G63 tuning. In addition, the 74%
                  overall weight reduction improves the vehicle’s responsiveness.
                </p>
              </div>
            </div>
            <div>
              <h3 className="features-title">Features</h3>
              <div className="features">
                <ul>
                  <li>940cc High Flow Wide Mouth (vs. stock:130%/vs. old ver.:120%)</li>
                  <li>Step-less flange</li>
                  <li>Complete with turbo charger bracket</li>
                  <li>Complete with O2 Sensor Boss</li>
                  <li>3" Piping all the way to the Catalytic Converter</li>
                </ul>
              </div>
            </div>
            <br />
            <div>
              <h3 className="features-title">Applications</h3>
              <div className="features">
                <ul>
                  <li>2001-2006 Mitsubishi Evo 7-9</li>
                </ul>
              </div>
            </div>
            <br />
            <div>
              <h3 className="features-title">What's Included</h3>
              <div className="features">
                <ul>
                  <li>Turbine Outlet</li>
                  <li>Aluminum Spacer</li>
                  <li>Front Pipe</li>
                  <li>Gasket (Outlet To Front Pipe)</li>
                  <li>Gasket (Front Pipe To Catalyst)</li>
                  <li>Bolt Smooth Paste</li>
                  <li>Stud Bolt M10-40 P=1.25 (Thread 12/26)</li>
                  <li>Titan Exhaust Bandage</li>
                  <li>Bandage Band</li>
                  <li>Necessary hardware</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
