import Header from '../../../components/header'
import Footer from '../../../components/footer'
import '.././Shop.css';

export default function TomeiOutlet() {
  return (
    <div className="App">
      <Header />
      <div class="item-container">
      <div class="left-container">
        <div class="item-img"><img src="tomei-outlet.jpg" class ="rounded" width ="500" height ="500"/></div>
      </div>
      <div class="right-container">
        <div>
          <h2 class="item-name">Tomei Expreme V2 Turbine Outlet | 2001-2006 Mitsubishi Evo 7-9<br></br></h2>
          <p class="item-brand">Tomei</p>
          <p class="item-brand">Part Number: (CH-TO79)</p>
          <p class="item-price">$621.00</p>
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
                The increased diameter and flow capacity improves exhaust efficiency whilst reducing secondary exhaust 
                pressure. The ver.2 was developed to cope with the demands of advanced 4G63 tuning. In addition, the 74% 
                overall weight reduction improves the vehicle’s responsiveness.
              </p>
            </div>
          </div>
          <div>
            <h3 class="features-title">Features</h3>
            <div class="features">
              <li>940cc High Flow Wide Mouth (vs. stock:130%/vs. old ver.:120%)</li>
              <li>Step-less flange</li>
              <li>Complete with turbo charger bracket</li>
              <li>Complete with O2 Sensor Boss</li>
              <li>3" Piping all the way to the Catalytic Converter</li>
            </div>
          </div>
          <br></br>
          <div>
            <h3 class="features-title">Applications</h3>
            <div class="features">
              <li>2001-2006 Mitsubishi Evo 7-9</li>
            </div>
          </div>
          <br></br>
          <div>
            <h3 class="features-title">What's Included</h3>
            <div class="features">
              <li>Turbine Outlet</li>
              <li>Aluminum Spacer</li>
              <li>Front Pipe</li>
              <li>Gasket (Outlet To Front Pipe)</li>
              <li>Gasket (Front Pipe To Catalyst)</li>
              <li>Bolt Smooth Paste</li>
              <li>Stud Bolt M10-40 P=1.25 (Thread 12/26)</li>
              <li>Titan Exhaust Bandage</li>
              <li>Bandage Band</li>
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