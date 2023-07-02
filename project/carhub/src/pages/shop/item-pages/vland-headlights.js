import React, { useState } from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import '.././Shop.css';

export default function VLAND() {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = async () => {
    try {
      const product = {
        title: '2008-2017 Mitsubishi Evo X (AUDI STYLE) VLAND Projectors',
        price: 359.0,
        description: 'Modified LED headlights and tail lights by VLAND®. Improve your vision and your vehicle’s appearance with these bolt-on headlight assemblies. The projector beam headlights/tail lights will produce a sharper, more focused beam of light for safer driving at night, and the modified headlights and tail lights housing will give your ride an exclusive, unique look.',
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
            <img src="vland.jpg" className="rounded" width="500" height="500" alt="Item" />
          </div>
        </div>
        <div className="rightblock">
          <div>
            <h2 className="item-name">2008-2017 Mitsubishi Evo X (AUDI STYLE) VLAND Projectors</h2>
            <p className="item-brand">VLAND</p>
            <p className="item-brand">Part Number: (CH-EVLH)</p>
            <p className="item-price">$359.00</p>
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
                  Modified LED headlights and tail lights by VLAND®. Improve your vision and your vehicle’s appearance with these bolt-on headlight assemblies. The projector beam headlights/tail lights will produce a sharper, more focused beam of light for safer driving at night, and the modified headlights and tail lights housing will give your ride an exclusive, unique look.
                </p>
              </div>
            </div>
            <div>
              <h3 className="features-title">Features</h3>
              <div className="features">
                <ul>
                  <li>Parking Light: LED (Diamond White)</li>
                  <li>Turn Signals: LED (Amber. Sequential Indicator. AKA Switch back Turn Signals)</li>
                  <li>Material:  PC, ABS</li>
                  <li>Item Weight: 17.46 Pounds</li>
                  <li>Rebuildable</li>
                </ul>
              </div>
            </div>
            <br />
            <div>
              <h3 className="features-title">Applications</h3>
              <div className="features">
                <ul>
                  <li>2008-2017 Mitsubishi Lancer/Evo X</li>
                </ul>
              </div>
            </div>
            <br />
            <div>
              <h3 className="features-title">What's Included</h3>
              <div className="features">
                <ul>
                  <li>VLAND Dual Beam Projector Headlights</li>
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
