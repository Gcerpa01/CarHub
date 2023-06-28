import Header from '../../../components/header'
import Footer from '../../../components/footer'
import '.././Shop.css';

export default function ETSIntake() {
  return (
    <div className="App">
      <Header />
      <div class="float-child">
        <div class="item-img"><img src="ets-intake1.jpg" class ="rounded" width ="500" height ="500"/></div>
      </div>
      <div class="float-child">
        <div>
          <h2 class="item-name">ETS 08-16 MITSUBISHI EVO X STOCK LOCATION TITANIUM INTAKE<br></br></h2>
          <p class="item-brand">Extreme Turbo Systems (ETS)</p>
          <p class="item-brand">Part Number: (CH-ETS4)</p>
          <p class="item-price">$595.00</p>
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
                The ETS Mitsubishi Evolution X Intake is proven to be the highest flowing intake on the market. We start this 
                intake kit off with a massive high flow ETS Spec K&N Filter, followed by a smooth transition to the factory MAF 
                housing with our billet velocity stack, and completed with a cnc mandrel bent intake pipe to the turbocharger.
                <br></br>
                This intake has been dyno proven to gain over 56whp when used with a boost controller at 22psi on the factory 
                turbocharger, and even more with an aftermarket turbocharger!
              </p>
            </div>
          </div>
          <div>
            <h3 class="features-title">Features</h3>
            <div class="features">
              <li>High Flow ETS Spec K&N Filter.</li>
              <li>ETS Billet CNC MAF Adapter</li>
              <li>Includes BOV Recircluation Hoses.</li>
              <li>Includes heat shield to prevent idle surge.</li>
              <li>56whp increase when used with a boost controller @ 22psi.</li>
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
              <li>ETS Intake Pipe</li>
              <li>2 ETS 3.5" couplers</li>
              <li>K&N Filter</li>
              <li>Heatshield</li>
              <li>BOV Hoses</li>
              <li>Necessary Hardware</li>
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