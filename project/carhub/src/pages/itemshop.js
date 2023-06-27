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
            <button onclick="decrement(-1)" class="quantity">-</button>
            <p class="quantity" id="totalClicks">Quantity: 1</p>
            <button onclick="increment(1)" class="quantity">+</button>
            <button class="add-to-cart">Add to Cart</button>
          </div>
          <div>
          <h3 class="features-title">Description</h3>
          <div class="description">
              <p>
              If you’re looking for an exhaust that you can throw on, make your car sound insanely loud or quiet at anytime you want,
               along with giving it a nice look between all the exhaust tips you can choose from, 
               this is a solid setup for your car.
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
          <br></br>
          <div>
            <h3 class="features-title">Specifications</h3>
            <div class="features">
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
            <h3 class="features-title">What's Included</h3>
            <div class="features">
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
      <script>
        {/* function increment(click) {
          var totalClicks = document.getElementById('totalClicks');
        }
        function decrement() {
          document.getElementById('demoInput').stepDown();
        } */}
      </script>
      <Footer />
    </div>
  );
}
