import Header from '../../../components/header'
import Footer from '../../../components/footer'
import '.././Shop.css';

export default function BCCoils() {
  return (
    <div className="App">
      <Header />
      <div class="itemblock">
      <div class="leftblock">
        <div class="item-img"><img src="bcc.jpg" class ="rounded" width ="500" height ="500"/></div>
      </div>
      <div class="rightblock">
        <div>
          <h2 class="item-name">BR Series Evo X Coilovers By BC Racing | 2008-2015 Mitsubishi Evo X<br></br></h2>
          <p class="item-brand">BC Racing</p>
          <p class="item-brand">Part Number: (CH-20BR)</p>
          <p class="item-price">$1,195.00</p>
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
                The BC Racing BR series coilovers are the perfect choice for street driving with a dash of weekend warrior track 
                action. Featuring easily accessible adjustment knobs and separately adjustable ride height, the BR series makes 
                adjusting and maintaining your performance coilover system easier than ever. Ride height is independently user 
                adjustable so you can dial in the exact look to reflect your driving style and performance needs. BC’s patented 
                concave lower locking ring keeps all adjustments locked in and ready for precise predicable feed back in any scenario. 
                BR series coilovers provide a strong, complete and attractive coilover system at a great price.
              </p>
            </div>
          </div>
          <div>
            <h3 class="features-title">Features</h3>
            <div class="features">
              <li>Mono-tube shock design</li>
              <li>30 levels of damping force adjustment, adjust compression/rebound</li>
              <li>Separate full length height adjustable</li>
              <li>Pillowball mounts and adjustable front camber plates included (where applicable)</li>
              <li>Rebuildable</li>
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
              <li>BR Coilovers</li>
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
