import Header from '../components/header'
import Footer from '../components/footer'
import './Shop.css';

export default function ItemShop() {
  return (
    <div className="App">
      <Header />
      <div class="float-child">
        <div class="item-img"><img src="BMW-Exhaust.jpg" class ="rounded" width ="500" height ="500"/></div>
      </div>
      <div class="float-child">
        <div>
          <h2 class="item-name">Bomiz Full Titanium Valvetronic Exhaust for BMW E9x M3<br></br></h2>
          <p class="item-brand">Bomiz</p>
          <p class="item-brand">Part Number: (CH-FTX9)</p>
          <p class="item-price">$5,800</p>
          <div>
            <button class="quantity">-</button>
            <p class="quantity">Quantity: 1</p>
            <button class="quantity">+</button>
            <button class="add-to-cart">Add to Cart</button>
          </div>
          <div>
          <h3 class="features-title">Description</h3>
          <div class="description">
              <p>
              If you’re looking for an exhaust that you can throw on, make your car sound insanely loud or quiet at anytime you want, along with giving it a nice look between all the exhaust tips you can choose from, this is a solid setup for your car.
              </p>
            </div>
          </div>
          <div>
            <h3 class="features-title">Features</h3>
            <div class="features">
              <li>Weight Savings</li>
              <li>Aggressive Sound</li>
              <li>Higher Quality and Stronger Material</li>
              <li>Tips made from Titanium</li>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
