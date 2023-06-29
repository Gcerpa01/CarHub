import Header from '../../../components/header'
import Footer from '../../../components/footer'
import '.././Shop.css';

export default function FuelInjectors() {
  return (
    <div className="App">
      <Header />
      <div class="item-container">
      <div class="left-container">
        <div class="item-img"><img src="fic6.jpg" class ="rounded" width ="500" height ="500"/></div>
      </div>
      <div class="right-container">
        <div>
          <h2 class="item-name">Fuel Injector Clinic 1650cc High-Z Injector Set | 2008-2015 Mitsubishi Evo X<br></br></h2>
          <p class="item-brand">Fuel Injector Clinic (FIC)</p>
          <p class="item-brand">Part Number: (CH-FIC6)</p>
          <p class="item-price">$852.60</p>
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
                Fuel Injector Clinic’s 1650cc/min high impedance injector is the largest high impedance injector compatible with 
                all race fuels and has excellent idle performance in street driven cars while still providing enough fuel to 
                support higher horsepower output on both E85 and gasoline.
                <br></br>
                The 1650cc high impedance injector can be used with any fuel type based on the stainless alloy valve construction. 
                It is compatible with pump gasoline, E85, Q16, VP Import, FTW and other MTBE oxygenated race fuels!
              </p>
            </div>
          </div>
          <div>
            <h3 class="features-title">Features</h3>
            <div class="features">
              <li>Flow tested and rated at 43.5psi (3Bar) at 120ºF (49°C) fuel temperature using 93 Octane, 10% E pump gasoline</li>
              <li>The highest flowing high impedance performance injector compatible with ALL fuels</li>
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
              <li>(4) 1650cc Saturated / High Impedance Ball & Seat Injectors</li>
              <li>(4) PGTJETR4Q Pigtails</li>
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