import React, { useState } from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import '.././Shop.css';

export default function ETSDownpipe() {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = async () => {
    try {
      const product = {
        title: 'ETS Recirculated Downpipe | 2008-2015 Mitsubishi Evo X',
        price: 695.0,
        description: 'The ETS Evolution X Recirculated O2 Eliminator Downpipe is a direct replacement for the stock O2 Housing and Downpipe. This downpipe features a recirculated wastegate dump for a stock-like sound under wide-open throttle. This downpipe has been engineered to be one of the highest flowing downpipes on the market with a CNC tapered flange that matches the turbine outlet perfectly.',
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
            <img src="ets-downpipe.jpg" className="rounded" width="500" height="500" alt="Item" />
          </div>
        </div>
        <div className="rightblock">
          <div>
            <h2 className="item-name">ETS Recirculated Downpipe | 2008-2015 Mitsubishi Evo X</h2>
            <p className="item-brand">Extreme Turbo Systems (ETS)</p>
            <p className="item-brand">Part Number: (CH-ETSD)</p>
            <p className="item-price">$695.00</p>
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
                  The ETS Evolution X Recirculated O2 Eliminator Downpipe is a direct replacement for the stock O2 Housing and Downpipe. This downpipe features a recirculated wastegate dump for a stock-like sound under wide-open throttle. This downpipe has been engineered to be one of the highest flowing downpipes on the market with a CNC tapered flange that matches the turbine outlet perfectly.
                </p>
              </div>
            </div>
            <div>
              <h3 className="features-title">Features</h3>
              <div className="features">
                <ul>
                  <li>Split Wastegate and Exhaust Design</li>
                  <li>Factory o2 sensor location</li>
                  <li>Wideband bung /w Plug included</li>
                  <li>CNC flange matches the turbine housing perfectly for the smoothest flow possible.</li>
                  <li>Weight: 10lbs</li>
                </ul>
              </div>
            </div>
            <br />
            <div>
              <h3 className="features-title">Applications</h3>
              <div className="features">
                <ul>
                  <li>2008-2015 Mitsubishi Evo X</li>
                </ul>
              </div>
            </div>
            <br />
            <div>
              <h3 className="features-title">What's Included</h3>
              <div className="features">
                <ul>
                  <li>1 - Recirculated Downpipe</li>
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
