import React, { useState } from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import '.././Shop.css';

export default function Te37() {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = async () => {
    try {
      const product = {
        title: 'Volk TE37 Saga Diamond Dark Gunmetal Wheel SET 18x9.5/5x114.3/+38 Offset',
        price: 3901.08,
        description: `RAYS went back to the drawing board and re-engineered the TE37 by creating an all new TE37 Saga which preserved the tradition and history that has always been the true essence of the Volk Racing TE37.
        
        It inherits the traditional 6 spoke design and aimed for further improvement in performance by creating a deeper pocket behind each spoke without sacrificing rigidity. In other words, even through twenty years of history, the true foundation has not changed.`,
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
            <img src="te371.jpg" className="rounded" width="500" height="500" alt="Item" />
          </div>
        </div>
        <div className="rightblock">
          <div>
            <h2 className="item-name">Volk TE37 Saga Diamond Dark Gunmetal Wheel SET 18x9.5/5x114.3/+38 Offset</h2>
            <p className="item-brand">Volk Racing</p>
            <p className="item-brand">Part Number: (CH-8EDX)</p>
            <p className="item-price">$3,901.08</p>
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
                  RAYS went back to the drawing board and re-engineered the TE37 by creating an all new TE37 Saga which
                  preserved the tradition and history that has always been the true essence of the Volk Racing TE37.
                  <br />
                  It inherits the traditional 6 spoke design and aimed for further improvement in performance by creating a
                  deeper pocket behind each spoke without sacrificing rigidity. In other words, even through twenty years of history,
                  the true foundation has not changed.
                </p>
              </div>
            </div>
            <div>
              <h3 className="features-title">Features</h3>
              <div className="features">
                <ul>
                  <li>Size - 18x9.5</li>
                  <li>Bolt Pattern - 5x114.3</li>
                  <li>Offset - +38mm</li>
                  <li>Bore Size - 73.1mm</li>
                  <li>Finish - Diamond Dark Gunmetal</li>
                </ul>
              </div>
            </div>
            <br />
            <div>
              <h3 className="features-title">Applications</h3>
              <div className="features">
                <ul>
                  <li>Universal (Confirmed Fitment Below)</li>
                  <li>2015+ Subaru WRX</li>
                  <li>2015+ Subaru WRX STi</li>
                </ul>
              </div>
            </div>
            <br />
            <div>
              <h3 className="features-title">What's Included</h3>
              <div className="features">
                <ul>
                  <li>4 - Volk TE37 Saga in Diamond Dark Gunmetal</li>
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
