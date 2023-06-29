import Header from '../../../components/header'
import Footer from '../../../components/footer'
import '.././Shop.css';

export default function ETSIntercooler() {
  return (
    <div className="App">
      <Header />
      <div class="item-container">
      <div class="left-container">
        <div class="item-img"><img src="ets-intercooler.jpg" class ="rounded" width ="500" height ="500"/></div>
      </div>
      <div class="right-container">
        <div>
          <h2 class="item-name">ETS 03-06 MITSUBISHI EVO 8/9 STANDARD TANK INTERCOOLER<br></br></h2>
          <p class="item-brand">Extreme Turbo Systems (ETS)</p>
          <p class="item-brand">Part Number: (CH-IC03)</p>
          <p class="item-price">$759.00</p>
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
                The ETS Mitsubishi Evolution Intercooler is the best on the market, bar none. It features bolt on installation and 
                fills the whole grill with core for a killer look and maximum efficiency. This unit also retains the factory crash 
                bar and splash pans on the 3" and 3.5" Intercooler. The kit includes the intercooler, mounting hardware, silicone 
                couplers, and SS T-Bolt Clamps. Pressure checked to 35psi.
              </p>
            </div>
          </div>
          <div>
            <h3 class="features-title">Features</h3>
            <div class="features">
              <li>Fills grill completely</li>
              <li>Bolt on design retains crash beam (3" and 3.5")</li>
              <li>Weight: 24lbs (3" Core); 27lbs (3.5" Core)</li>
            </div>
          </div>
          <br></br>
          <div>
            <h3 class="features-title">Applications</h3>
            <div class="features">
              <li>2003-2006 Mitsubishi Evo 8/9</li>
            </div>
          </div>
          <br></br>
          <div>
            <h3 class="features-title">What's Included</h3>
            <div class="features">
              <li>ETS Intercooler</li>
              <li>2 ETS 3.5" couplers</li>
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