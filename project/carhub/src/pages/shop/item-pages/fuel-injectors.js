import React, { useState } from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import '.././Shop.css';

export default function FuelInjectors() {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = async () => {
    try {
      const product = {
        title: 'Fuel Injector Clinic 1650cc High-Z Injector Set | 2008-2015 Mitsubishi Evo X',
        price: 852.6,
        description: 'Fuel Injector Clinic’s 1650cc/min high impedance injector is the largest high impedance injector compatible with all race fuels and has excellent idle performance in street driven cars while still providing enough fuel to support higher horsepower output on both E85 and gasoline.\nThe 1650cc high impedance injector can be used with any fuel type based on the stainless alloy valve construction. It is compatible with pump gasoline, E85, Q16, VP Import, FTW and other MTBE oxygenated race fuels!',
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
            <img src="fic6.jpg" className="rounded" width="500" height="500" alt="Item" />
          </div>
        </div>
        <div className="rightblock">
          <div>
            <h2 className="item-name">Fuel Injector Clinic 1650cc High-Z Injector Set | 2008-2015 Mitsubishi Evo X</h2>
            <p className="item-brand">Fuel Injector Clinic (FIC)</p>
            <p className="item-brand">Part Number: (CH-FIC6)</p>
            <p className="item-price">$852.60</p>
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
                  Fuel Injector Clinic’s 1650cc/min high impedance injector is the largest high impedance injector compatible with
                  all race fuels and has excellent idle performance in street driven cars while still providing enough fuel to
                  support higher horsepower output on both E85 and gasoline.
                  <br />
                  The 1650cc high impedance injector can be used with any fuel type based on the stainless alloy valve construction.
                  It is compatible with pump gasoline, E85, Q16, VP Import, FTW and other MTBE oxygenated race fuels!
                </p>
              </div>
            </div>
            <div>
              <h3 className="features-title">Features</h3>
              <div className="features">
                <ul>
                  <li>Flow tested and rated at 43.5psi (3Bar) at 120ºF (49°C) fuel temperature using 93 Octane, 10% E pump gasoline</li>
                  <li>The highest flowing high impedance performance injector compatible with ALL fuels</li>
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
                  <li>(4) 1650cc Saturated / High Impedance Ball & Seat Injectors</li>
                  <li>(4) PGTJETR4Q Pigtails</li>
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
