import React, { useState } from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import '.././Shop.css';

export default function BCCoils() {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = async () => {
    try {
      const product = {
        title: 'BR Series Evo X Coilovers By BC Racing | 2008-2015 Mitsubishi Evo X',
        price: 1195.0,
        description: 'The BC Racing BR series coilovers are the perfect choice for street driving with a dash of weekend warrior track action. Featuring easily accessible adjustment knobs and separately adjustable ride height, the BR series makes adjusting and maintaining your performance coilover system easier than ever. Ride height is independently user adjustable so you can dial in the exact look to reflect your driving style and performance needs. BC’s patented concave lower locking ring keeps all adjustments locked in and ready for precise predictable feedback in any scenario. BR series coilovers provide a strong, complete, and attractive coilover system at a great price.',
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
            <img src="bcc.jpg" className="rounded" width="500" height="500" alt="Item" />
          </div>
        </div>
        <div className="rightblock">
          <div>
            <h2 className="item-name">BR Series Evo X Coilovers By BC Racing | 2008-2015 Mitsubishi Evo X</h2>
            <p className="item-brand">BC Racing</p>
            <p className="item-brand">Part Number: (CH-20BR)</p>
            <p className="item-price">$1,195.00</p>
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
                  The BC Racing BR series coilovers are the perfect choice for street driving with a dash of weekend warrior track action. Featuring easily accessible adjustment knobs and separately adjustable ride height, the BR series makes adjusting and maintaining your performance coilover system easier than ever. Ride height is independently user adjustable so you can dial in the exact look to reflect your driving style and performance needs. BC’s patented concave lower locking ring keeps all adjustments locked in and ready for precise predictable feedback in any scenario. BR series coilovers provide a strong, complete, and attractive coilover system at a great price.
                </p>
              </div>
            </div>
            <div>
              <h3 className="features-title">Features</h3>
              <div className="features">
                <ul>
                  <li>Mono-tube shock design</li>
                  <li>30 levels of damping force adjustment, adjust compression/rebound</li>
                  <li>Separate full-length height adjustable</li>
                  <li>Pillowball mounts and adjustable front camber plates included (where applicable)</li>
                  <li>Rebuildable</li>
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
                  <li>BR Coilovers</li>
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
