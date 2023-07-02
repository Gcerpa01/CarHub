import React, { useState } from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import '.././Shop.css';

export default function Precision() {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = async () => {
    try {
      const product = {
        title: 'Precision Turbo Street & Race PT6266 CEA JB Turbocharger - 735WHP',
        price: 1158.74,
        description: 'This is the turbo that changed history: the first mass-production unit to feature Precisiongroundbreaking CEA compressor wheel technology, the PT6262 CEA turbocharger is considered "the holy grail" by many in the forced induction world. This turbo can help you make unstoppable power when used on its own, or double up to twins for a much more intimidating and incredible setup.',
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
            <img src="pte.jpg" className="rounded" width="500" height="500" alt="Item" />
          </div>
        </div>
        <div className="rightblock">
          <div>
            <h2 className="item-name">Precision Turbo Street & Race PT6266 CEA JB Turbocharger - 735WHP</h2>
            <p className="item-brand">Precision Turbo (PTE)</p>
            <p className="item-brand">Part Number: (CH-6266)</p>
            <p className="item-price">$1,158.74</p>
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
                  This is the turbo that changed history: the first mass-production unit to feature Precisiongroundbreaking CEA
                  compressor wheel technology, the PT6262 CEA turbocharger is considered "the holy grail" by many in the forced
                  induction world. This turbo can help you make unstoppable power when used on its own, or double up to twins for
                  a much more intimidating and incredible setup.
                </p>
              </div>
            </div>
            <div>
              <h3 className="features-title">Features</h3>
              <div className="features">
                <ul>
                  <li>Exclusive CEA® compressor wheel machined from a 2618-aluminum forging</li>
                  <li>Higher efficiency and faster transient response for maximum power and performance</li>
                  <li>62mm inducer compressor wheel</li>
                  <li>66mm, 76 trim turbine wheel</li>
                </ul>
              </div>
            </div>
            <br />
            <div>
              <h3 className="features-title">Applications</h3>
              <div className="features">
                <ul>
                  <li>Universal</li>
                </ul>
              </div>
            </div>
            <br />
            <div>
              <h3 className="features-title">What's Included</h3>
              <div className="features">
                <ul>
                  <li>1 Turbocharger</li>
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
