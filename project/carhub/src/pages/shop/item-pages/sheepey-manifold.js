import React, { useState } from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import '.././Shop.css';

export default function SheepeyManifold() {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = async () => {
    try {
      const product = {
        title: 'SHEEPEYRACE MITSUBISHI EVO X FACTORY REPLACEMENT TURBO MANIFOLD',
        price: 1200.00,
        description: 'This is the Sheepey Race factory replacement turbo manifold for the Mitsubishi EVO X. Two aftermarket studs required for installation.',
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
            <img src="sheepey-manifold.jpg" className="rounded" width="500" height="500" alt="Item" />
          </div>
        </div>
        <div className="rightblock">
          <div>
            <h2 className="item-name">SHEEPEYRACE MITSUBISHI EVO X FACTORY REPLACEMENT TURBO MANIFOLD</h2>
            <p className="item-brand">SHEEPEY Inc. (SR)</p>
            <p className="item-brand">Part Number: (CH-SRMX)</p>
            <p className="item-price">$1,200.00</p>
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
                  This is the Sheepey Race factory replacement turbo manifold for the Mitsubishi EVO X. Two aftermarket studs required for installation.
                </p>
              </div>
            </div>
            <div>
              <h3 className="features-title">Features</h3>
              <div className="features">
                <ul>
                  <li>T304 STAINLESS STEEL SCHEDULE 40</li>
                  <li>MANDREL-BENT TUBING; TIG-WELDED</li>
                  <li>11MM THICK FLANGES</li>
                  <li>PORTED HEAD AND FLANGE</li>
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
                  <li>Sheepey Race Exhaust Manifold</li>
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
