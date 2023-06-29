import Header from '../../../components/header'
import Footer from '../../../components/footer'
import '.././Shop.css';

export default function Te37() {
  return (
    <div className="App">
      <Header />
      <div class="itemblock">
      <div class="leftblock">
        <div class="item-img"><img src="te371.jpg" class ="rounded" width ="500" height ="500"/></div>
      </div>
      <div class="rightblock">
        <div>
          <h2 class="item-name">Volk TE37 Saga Diamond Dark Gunmetal Wheel SET 18x9.5/5x114.3/+38 Offset<br></br></h2>
          <p class="item-brand">Volk Racing</p>
          <p class="item-brand">Part Number: (CH-8EDX)</p>
          <p class="item-price">$3,901.08</p>
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
                RAYS went back to the drawing board and re-engineered the TE37 by creating an all new TE37 Saga which 
                preserved the tradition and history that has always been the true essence of the Volk Racing TE37.
                <br></br>
                It inherits the traditional 6 spoke design and aimed for further improvement in performance by creating a 
                deeper pocket behind each spoke without sacrificing rigidity. In other words, even through twenty years of history, 
                the true foundation has not changed.
              </p>
            </div>
          </div>
          <div>
            <h3 class="features-title">Features</h3>
            <div class="features">
              <li>Size - 18x9.5</li>
              <li>Bolt Pattern - 5x114.3</li>
              <li>Offset - +38mm</li>
              <li>Bore Size - 73.1mm</li>
              <li>Finish - Diamond Dark Gunmetal</li>
            </div>
          </div>
          <br></br>
          <div>
            <h3 class="features-title">Applications</h3>
            <div class="features">
              <li>Universal (Confirmed Fitment Below)</li>
              <li>2015+ Subaru WRX</li>
              <li>2015+ Subaru WRX STi</li>
            </div>
          </div>
          <br></br>
          <div>
            <h3 class="features-title">What's Included</h3>
            <div class="features">
              <li>4 - Volk TE37 Saga in Diamond Dark Gunmetal</li>
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
