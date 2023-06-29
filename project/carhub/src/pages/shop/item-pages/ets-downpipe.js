import Header from '../../../components/header'
import Footer from '../../../components/footer'
import '.././Shop.css';

export default function ETSDownpipe() {
  return (
    <div className="App">
      <Header />
      <div class="itemblock">
      <div class="leftblock">
        <div class="item-img"><img src="ets-downpipe.jpg" class ="rounded" width ="500" height ="500"/></div>
      </div>
      <div class="rightblock">
        <div>
          <h2 class="item-name">ETS Recirculated Downpipe | 2008-2015 Mitsubishi Evo X<br></br></h2>
          <p class="item-brand">Extreme Turbo Systems (ETS)</p>
          <p class="item-brand">Part Number: (CH-ETSD)</p>
          <p class="item-price">$695.00</p>
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
                The ETS Evolution X Recirculated O2 Eliminator Downpipe is a direct replacement for the stock O2 Housing 
                and Downpipe. This downpipe features a recirculated wastegate dump for a stock like sound under wide open 
                throttle. This downpipe has been engineered to be one of the highest flowing downpipes on the market with a 
                CNC tapered flange that matches the turbine outlet perfectly.
              </p>
            </div>
          </div>
          <div>
            <h3 class="features-title">Features</h3>
            <div class="features">
              <li>Split Wastegate and Exhaust Design</li>
              <li>Factory o2 sensor location</li>
              <li>Wideband bung /w Plug included</li>
              <li>CNC flange matches the turbine housing perfectly for the smoothest flow possible.</li>
              <li>Weight: 10lbs</li>
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
              <li>1 - Recirculated Downpipe</li>
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