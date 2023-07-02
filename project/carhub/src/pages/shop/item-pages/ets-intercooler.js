import React, { useState } from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import '.././Shop.css';

export default function ETSIntercooler() {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = async () => {
    try {
      const product = {
        title: 'ETS 03-06 MITSUBISHI EVO 8/9 STANDARD TANK INTERCOOLER',
        price: 759.0,
        description: 'The ETS Mitsubishi Evolution Intercooler is the best on the market, bar none. It features bolt on installation and fills the whole grill with core for a killer look and maximum efficiency. This unit also retains the factory crash bar and splash pans on the 3" and 3.5" Intercooler. The kit includes the intercooler, mounting hardware, silicone couplers, and SS T-Bolt Clamps. Pressure checked to 35psi.',
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
            <img src="ets-intercooler.jpg" className="rounded" width="500" height="500" alt="Item" />
          </div>
        </div>
        <div className="rightblock">
          <div>
            <h2 className="item-name">ETS 03-06 MITSUBISHI EVO 8/9 STANDARD TANK INTERCOOLER</h2>
            <p className="item-brand">Extreme Turbo Systems (ETS)</p>
            <p className="item-brand">Part Number: (CH-IC03)</p>
            <p className="item-price">$759.00</p>
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
                  The ETS Mitsubishi Evolution Intercooler is the best on the market, bar none. It features bolt on installation and fills the whole grill with core for a killer look and maximum efficiency. This unit also retains the factory crash bar and splash pans on the 3" and 3.5" Intercooler. The kit includes the intercooler, mounting hardware, silicone couplers, and SS T-Bolt Clamps. Pressure checked to 35psi.
                </p>
              </div>
            </div>
            <div>
              <h3 className="features-title">Features</h3>
              <div className="features">
                <ul>
                  <li>Fills grill completely</li>
                  <li>Bolt on design retains crash beam (3" and 3.5")</li>
                  <li>Weight: 24lbs (3" Core); 27lbs (3.5" Core)</li>
                </ul>
              </div>
            </div>
            <br />
            <div>
              <h3 className="features-title">Applications</h3>
              <div className="features">
                <ul>
                  <li>2003-2006 Mitsubishi Evo 8/9</li>
                </ul>
              </div>
            </div>
            <br />
            <div>
              <h3 className="features-title">What's Included</h3>
              <div className="features">
                <ul>
                  <li>ETS Intercooler</li>
                  <li>2 ETS 3.5" couplers</li>
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
