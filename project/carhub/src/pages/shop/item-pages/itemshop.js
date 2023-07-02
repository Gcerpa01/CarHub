import React, { useState } from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import '.././Shop.css';

export default function ItemShop() {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = async () => {
    try {
      const product = {
        title: 'Bomiz Full Titanium Valvetronic Exhaust for BMW E9x M3',
        price: 5800.0,
        description: 'If you’re looking for an exhaust that you can throw on...',
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
            <img src="BMW-Exhaust.jpg" className="rounded" width="500" height="500" alt="Item" />
          </div>
        </div>
        <div className="rightblock">
          <div>
            <h2 className="item-name">Bomiz Full Titanium Valvetronic Exhaust for BMW E9x M3</h2>
            <p className="item-brand">Bomiz</p>
            <p className="item-brand">Part Number: (CH-FTX9)</p>
            <p className="item-price">$5,800.00</p>
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
                  If you’re looking for an exhaust that you can throw on, make your car sound insanely loud or quiet at
                  anytime you want, along with giving it a nice look between all the exhaust tips you can choose from,
                  this is a solid setup for your car.
                </p>
              </div>
            </div>
            <div>
              <h3 className="features-title">Features</h3>
              <div className="features">
                <ul>
                  <li>Weight Savings</li>
                  <li>Aggressive Sound</li>
                  <li>Higher Quality and Stronger Material</li>
                  <li>Tips made from Titanium</li>
                </ul>
              </div>
            </div>
            <br />
            <div>
              <h3 className="features-title">Specifications</h3>
              <div className="features">
                <ul>
                  <li>Built from Titanium, including all components</li>
                  <li>This is a Full System, Not an Axle-Back</li>
                  <li>High Quality Welding</li>
                  <li>Adjustable 89mm Single Wall Tips w/ Bomiz Logo</li>
                  <li>Electronic Valves</li>
                  <li>HP and Torque Increase</li>
                </ul>
              </div>
            </div>
            <br />
            <div>
              <h3 className="features-title">What's Included</h3>
              <div className="features">
                <ul>
                  <li>Rear Mufflers + Connecting Pipes</li>
                  <li>X Pipe + Test Pipes</li>
                  <li>2x Remote Controls + Receiver</li>
                  <li>4x 89mm Tips</li>
                  <li>Necessary Hardware and Clamps</li>
                  <li>Installation Instructions</li>
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
