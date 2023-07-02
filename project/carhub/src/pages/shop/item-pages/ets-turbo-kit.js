import React, { useState } from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import '.././Shop.css';

export default function ETSTurboKit() {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = async () => {
    try {
      const product = {
        title: 'ETS 08-16 MITSUBISHI EVO X T4 TWIN SCROLL TURBO KIT',
        price: 6095.0,
        description: 'For serious power upgrades on the Evo 10 look no further than an ETS Turbo Kit. Packed with features like high flowing Equal Length ETS Manifold, true Merge Collector, full 3" Downpipe, direct routed Wastegate Dump, low angle turbo outlet, high flow upper intercooler pipe, Tial 44mm Wastegate, and any T3/T4 or Garrett GT series turbos, these kits will get the job done, street or track. Along with great performance, Features such as an exhaust flex, T-Bolt Clamps, 4ply silicone, and braided oil lines, will help make sure that you do not have to use the ETS Life Time Warranty! (90 days on manifold if wrapped or coated)',
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
            <img src="ets-turbo-kit.jpg" className="rounded" width="500" height="500" alt="Item" />
          </div>
        </div>
        <div className="rightblock">
          <div>
            <h2 className="item-name">ETS 08-16 MITSUBISHI EVO X T4 TWIN SCROLL TURBO KIT</h2>
            <p className="item-brand">Extreme Turbo Systems (ETS)</p>
            <p className="item-brand">Part Number: (CH-ETST)</p>
            <p className="item-price">$6,095.00</p>
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
                  For serious power upgrades on the Evo 10 look no further than an ETS Turbo Kit. Packed with features like high
                  flowing Equal Length ETS Manifold, true Merge Collector, full 3" Downpipe, direct routed Wastegate Dump, low
                  angle turbo outlet, high flow upper intercooler pipe, Tial 44mm Wastegate, and any T3/T4 or Garrett GT series
                  turbos, these kits will get the job done, street or track. Along with great performance, Features such as an
                  exhaust flex, T-Bolt Clamps, 4ply silicone, and braided oil lines, will help make sure that you do not have to
                  use the ETS Life Time Warranty! (90 days on manifold if wrapped or coated)
                </p>
              </div>
            </div>
            <div>
              <h3 className="features-title">Features</h3>
              <div className="features">
                <ul>
                  <li>Equal Length ETS Manifold</li>
                  <li>Merge Collector</li>
                  <li>DUAL Tial MVS wastegates</li>
                  <li>Includes heat shield to prevent idle surge.</li>
                  <li>806whp @ 36psi (with supporting mods)</li>
                </ul>
              </div>
            </div>
            <br />
            <div>
              <h3 className="features-title">Applications</h3>
              <div className="features">
                <ul>
                  <li>2008-2016 Mitsubishi Evo X</li>
                </ul>
              </div>
            </div>
            <br />
            <div>
              <h3 className="features-title">What's Included</h3>
              <div className="features">
                <ul>
                  <li>Turbocharger</li>
                  <li>Stainless Steel Downpipe</li>
                  <li>Exhaust Manifold</li>
                  <li>Dual 38mm TiAL MVS Wastegates</li>
                  <li>Wastegate Dump Tubes</li>
                  <li>Upper Intercooler Pipe (rear section)</li>
                  <li>Oil Feed and Drain Lines</li>
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
