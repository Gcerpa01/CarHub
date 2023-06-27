import Header from '../../../components/header'
import Footer from '../../../components/footer'
import '.././Shop.css';

export default function Precision() {
  return (
    <div className="App">
      <Header />
      <div class="float-child">
        <div class="item-img"><img src="pte.jpg" class ="rounded" width ="500" height ="500"/></div>
      </div>
      <div class="float-child">
        <div>
          <h2 class="item-name">Precision Turbo Street & Race PT6266 CEA JB Turbocharger - 735WHP<br></br></h2>
          <p class="item-brand">Precision Turbo (PTE)</p>
          <p class="item-brand">Part Number: (CH-6266)</p>
          <p class="item-price">$1,158.74</p>
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
                This is the turbo that changed history: the first mass-production unit to feature Precisiongroundbreaking CEA 
                compressor wheel technology, the PT6262 CEA turbocharger is considered "the holy grail" by many in the forced 
                induction world. This turbo can help you make unstoppable power when used on its own, or double up to twins for 
                a much more intimidating and incredible setup.
              </p>
            </div>
          </div>
          <div>
            <h3 class="features-title">Features</h3>
            <div class="features">
              <li>Exclusive CEA® compressor wheel machined from a 2618-aluminum forging</li>
              <li>Higher efficiency and faster transient response for maximum power and performance</li>
              <li>62mm inducer compressor wheel</li>
              <li>66mm, 76 trim turbine wheel</li>
            </div>
          </div>
          <br></br>
          <div>
            <h3 class="features-title">Applications</h3>
            <div class="features">
              <li>Universal</li>
            </div>
          </div>
          <br></br>
          <div>
            <h3 class="features-title">What's Included</h3>
            <div class="features">
              <li>1 Turbocharger</li>
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
