import Header from '../components/header'
import Footer from '../components/footer'
import './Shop.css';

export default function ItemShop() {
  return (
    <div className="App">
      <Header />
      <div className="float-child">
        <div className="item-img"><img src="BMW-Exhaust.jpg" class ="rounded" width ="500" height ="500"/></div>
      </div>
      <div className="float-child">
        <div>
          <h2 className="item-name">Bomiz Full Titanium Valvetronic Exhaust for BMW E9x M3<br></br></h2>
          <p className="item-brand">Bomiz</p>
          <p className="item-brand">Part Number: (CH-FTX9)</p>
          <p className="item-price">$5,800</p>
          <div>
            <button className="quantity">-</button>
            <p className="quantity">Quantity: 1</p>
            <button className="quantity">+</button>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div>
          <h3 className="features-title">Description</h3>
          <div className="description">
              <p>
              If you’re looking for an exhaust that you can throw on, make your car sound insanely loud or quiet at anytime you want,
               along with giving it a nice look between all the exhaust tips you can choose from, 
               this is a solid setup for your car.
              </p>
            </div>
          </div>
          <div>
            <h3 className="features-title">Features</h3>
            <div className="features">
              <li>Weight Savings</li>
              <li>Aggressive Sound</li>
              <li>Higher Quality and Stronger Material</li>
              <li>Tips made from Titanium</li>
            </div>
          </div>
          <br></br>
          <div>
            <h3 className="features-title">Specifications</h3>
            <div className="features">
              <li>Built from Titanium, including all components</li>
              <li>This is a Full System, Not an Axle-Back</li>
              <li>High Quality Welding</li>
              <li>Adjustable 89mm Single Wall Tips w/ Bomiz Logo</li>
              <li>Electronic Valves </li>
              <li>HP and Torque Increase</li>
            </div>
          </div>
          <br></br>
          <div>
            <h3 className="features-title">What's Included</h3>
            <div className="features">
              <li>Rear Mufflers + Connecting Pipes</li>
              <li>X Pipe + Test Pipes</li>
              <li>2x Remote Controls + Receiver</li>
              <li>4x 89mm Tips</li>
              <li>Necessary Hardware and Clamps </li>
              <li>Installation Instructions</li>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
