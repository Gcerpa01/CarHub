import Header from '../../../components/header'
import Footer from '../../../components/footer'
import '.././Shop.css';

export default function SheepeyManifold() {
  return (
    <div className="App">
      <Header />
      <div class="item-container">
      <div class="left-container">
        <div class="item-img"><img src="sheepey-manifold.jpg" class ="rounded" width ="500" height ="500"/></div>
      </div>
      <div class="right-container">
        <div>
          <h2 class="item-name">SHEEPEYRACE MITSUBISHI EVO X FACTORY REPLACEMENT TURBO MANIFOLD<br></br></h2>
          <p class="item-brand">SHEEPEY Inc. (SR)</p>
          <p class="item-brand">Part Number: (CH-SRMX)</p>
          <p class="item-price">$1,200.00</p>
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
                This is the Sheepey Race factory replacement turbo manifold for the Mitsubishi EVO X. Two aftermarket studs 
                required for installation.
              </p>
            </div>
          </div>
          <div>
            <h3 class="features-title">Features</h3>
            <div class="features">
              <li>T304 STAINLESS STEEL SCHEDULE 40</li>
              <li>MANDREL-BENT TUBING; TIG-WELDED</li>
              <li>11MM THICK FLANGES</li>
              <li>PORTED HEAD AND FLANGE</li>
            </div>
          </div>
          <br></br>
          <div>
            <h3 class="features-title">Applications</h3>
            <div class="features">
              <li>2008-2015 Mitsubishi Evo X</li>
            </div>
          </div>
          <br></br>
          <div>
            <h3 class="features-title">What's Included</h3>
            <div class="features">
              <li>Sheepey Race Exhaust Manifold</li>
            </div>
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