import React, { useState } from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import '.././Shop.css';

export default function ETSIntake() {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = async () => {
    try {
      const product = {
        title: 'ETS 08-16 MITSUBISHI EVO X STOCK LOCATION TITANIUM INTAKE',
        price: 595.0,
        description: 'The ETS Mitsubishi Evolution X Intake is proven to be the highest flowing intake on the market. We start this intake kit off with a massive high flow ETS Spec K&N Filter, followed by a smooth transition to the factory MAF housing with our billet velocity stack, and completed with a cnc mandrel bent intake pipe to the turbocharger. This intake has been dyno proven to gain over 56whp when used with a boost controller at 22psi on the factory turbocharger, and even more with an aftermarket turbocharger!',
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
            <img src="ets-intake1.jpg" className="rounded" width="500" height="500" alt="Item" />
          </div>
        </div>
        <div className="rightblock">
          <div>
            <h2 className="item-name">ETS 08-16 MITSUBISHI EVO X STOCK LOCATION TITANIUM INTAKE</h2>
            <p className="item-brand">Extreme Turbo Systems (ETS)</p>
            <p className="item-brand">Part Number: (CH-ETS4)</p>
            <p className="item-price">$595.00</p>
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
                  The ETS Mitsubishi Evolution X Intake is proven to be the highest flowing intake on the market. We start this intake kit off with a massive high flow ETS Spec K&N Filter, followed by a smooth transition to the factory MAF housing with our billet velocity stack, and completed with a cnc mandrel bent intake pipe to the turbocharger. This intake has been dyno proven to gain over 56whp when used with a boost controller at 22psi on the factory turbocharger, and even more with an aftermarket turbocharger!
                </p>
              </div>
            </div>
            <div>
              <h3 className="features-title">Features</h3>
              <div className="features">
                <ul>
                  <li>High Flow ETS Spec K&N Filter.</li>
                  <li>ETS Billet CNC MAF Adapter</li>
                  <li>Includes BOV Recircluation Hoses.</li>
                  <li>Includes heat shield to prevent idle surge.</li>
                  <li>56whp increase when used with a boost controller @ 22psi.</li>
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
                  <li>ETS Intake Pipe</li>
                  <li>2 ETS 3.5" couplers</li>
                  <li>K&N Filter</li>
                  <li>Heatshield</li>
                  <li>BOV Hoses</li>
                  <li>Necessary Hardware</li>
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
