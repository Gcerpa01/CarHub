import Header from '../../../components/header'
import Footer from '../../../components/footer'
import '.././Shop.css';

export default function ETSTurboKit() {
  return (
    <div className="App">
      <Header />
      <div class="item-container">
      <div class="left-container">
        <div class="item-img"><img src="ets-turbo-kit.jpg" class ="rounded" width ="500" height ="500"/></div>
      </div>
      <div class="right-container">
        <div>
          <h2 class="item-name">ETS 08-16 MITSUBISHI EVO X T4 TWIN SCROLL TURBO KIT<br></br></h2>
          <p class="item-brand">Extreme Turbo Systems (ETS)</p>
          <p class="item-brand">Part Number: (CH-ETST)</p>
          <p class="item-price">$6,095.00</p>
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
                For serious power upgrades on the Evo 10 look no further than an ETS Turbo Kit. Packed with features like high 
                flowing Equal Length ETS Manifold, true Merge Collector, full 3" Downpipe, direct routed Wastegate Dump, low 
                angle turbo outlet, high flow upper intercooler pipe, Tial 44mm Wastegate, and any T3/T4 or Garrett GT series 
                turbos, these kits will get the job done, street or track. Along with great performance, Features such as an 
                exhaust flex, T-Bolt Clamps, 4ply silicone, and braided oil lines, will help make sure that you do not have to 
                use the ETS Life Time Warranty! (90 days on manifold if wrapped or coated)
              </p>
            </div>
          </div>
          <div>
            <h3 class="features-title">Features</h3>
            <div class="features">
              <li>Equal Length ETS Manifold</li>
              <li>Merge Collector</li>
              <li>DUAL Tial MVS wastegates</li>
              <li>Includes heat shield to prevent idle surge.</li>
              <li>806whp @ 36psi (with supporting mods)</li>
            </div>
          </div>
          <br></br>
          <div>
            <h3 class="features-title">Applications</h3>
            <div class="features">
              <li>2008-2016 Mitsubishi Evo X</li>
            </div>
          </div>
          <br></br>
          <div>
            <h3 class="features-title">What's Included</h3>
            <div class="features">
              <li>Turbocharger</li>
              <li>Stainless Steel Downpipe</li>
              <li>Exhaust Manifold</li>
              <li>Dual 38mm TiAL MVS Wastegates</li>
              <li>Wastegate Dump Tubes</li>
              <li>Upper Intercooler Pipe (rear section)</li>
              <li>Oil Feed and Drain Lines</li>
              <li>Necessary hardware</li>
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