import Header from '../../../components/header'
import Footer from '../../../components/footer'
import '.././Shop.css';

export default function VLAND() {
  return (
    <div className="App">
      <Header />
      <div class="item-container">
      <div class="left-container">
        <div class="item-img"><img src="vland.jpg" class ="rounded" width ="500" height ="500"/></div>
      </div>
      <div class="right-container">
        <div>
          <h2 class="item-name">2008-2017 Mitsubishi Evo X (AUDI STYLE) VLAND Projectors<br></br></h2>
          <p class="item-brand">VLAND</p>
          <p class="item-brand">Part Number: (CH-EVLH)</p>
          <p class="item-price">$359.00</p>
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
              Modified LED headlights and tail lights by VLAND®. Improve your vision and your vehicle’s appearance with these 
              bolt-on headlight assemblies. The projector beam headlights/tail lights will produce a sharper, more focused beam 
              of light for safer driving at night, and the modified headlights and tail lights housing will give your ride an 
              exclusive, unique look.
              </p>
            </div>
          </div>
          <div>
            <h3 class="features-title">Features</h3>
            <div class="features">
              <li>Parking Light: LED (Diamond White)</li>
              <li>Turn Signals: LED (Amber. Sequential Indicator. AKA Switch back Turn Signals)</li>
              <li>Material:  PC, ABS</li>
              <li>Item Weight: 17.46 Pounds</li>
              <li>Rebuildable</li>
            </div>
          </div>
          <br></br>
          <div>
            <h3 class="features-title">Applications</h3>
            <div class="features">
              <li>2008-2017 Mitsubishi Lancer/Evo X</li>
            </div>
          </div>
          <br></br>
          <div>
            <h3 class="features-title">What's Included</h3>
            <div class="features">
              <li>VLAND Dual Beam Projector Headlights</li>
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