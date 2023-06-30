import Header from '../components/header'
import Footer from '../components/footer'
import { useState } from 'react';
import './Home.css'

export default function Home() {

  let [products, setProducts] = useState([
    {
      id: 4,
      image: `./TE37.jpg`,
      title: `ADD some spicy wheels for your car`,
      description: `Volk TE37 Saga Diamond Dark Gunmetal Wheel SET 18x9.5/5x114.3/+38 Offset (CH-8EDX)`
    },
    {
      id: 5,
      image: `./BC-Coils.jpg`,
      title: `Add some performance suspension to your car`,
      description: `BR Series Evo X Coilovers By BC Racing | 2008-2015 Mitsubishi Evo X (CH-20BR)`
    },
    {
      id: 6,
      image: `./VLAND-EvoX.jpg`,
      title: `Update your Headlights`,
      description: `2008-2017 Mitsubishi Evo X RGBW LED Boards (AUDI STYLE) VLAND Projectors (CH-EVLH)`,
    },
  ]);

  // When someone clicks the Learn More Button, it will take them to the shop page
  const goToShop = (e) => {
    // We use the window API to get the origin of the current domain
    // On local this is http://localhost:3000/
    // On production it might be different,
    // So we use window.location.origin
    window.location.href = `${window.location.origin}/shop`;
  }

  return (
    <div className="App">
      <Header />
        <section className="hero-section">
        <div className="home-container">
          <h1 className="home-h1">Welcome to CarHub!</h1>
          <div className="newsletter-signup">
            <h2 className="home-h2">Subscribe to Our Newsletter</h2>
            <form className="home-form">
              <input className="home-input" type="text" placeholder="Enter your email" />
              <button className="home-button" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
      <div className="home-container">
    
      <section className="home-container">
        <h2 className="offer-heading">What We Offer</h2>
        <div className="offer-container"> 
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <img className="card-img-top" src="https://craftypixels.com/placeholder-image/300x300/ababab/000000&text=[PH]+CarHub" alt="Placeholder 1" />
              <div className="card-body">
                <h3 className="card-title">Placeholder Item 1</h3>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur lectus sed nisi aliquam, ac rhoncus leo aliquam.</p>
                <button className="home-button" type="submit">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img className="card-img-top" src="https://craftypixels.com/placeholder-image/300x300/ababab/000000&text=[PH]+CarHub" alt="Placeholder 2" />
              <div className="card-body">
                <h3 className="card-title">Placeholder Item 2</h3>
                <p className="card-text">Sed gravida, lorem a vestibulum aliquam, sem felis malesuada lorem, sed molestie metus purus sed libero.</p>
                <button className="home-button" type="submit">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img className="card-img-top" src="https://craftypixels.com/placeholder-image/300x300/ababab/000000&text=[PH]+CarHub" alt="Placeholder 3" />
              <div className="card-body">
                <h3 className="card-title">Placeholder Item 3</h3>
                <p className="card-text">Donec nec sem sed erat cursus lacinia. Fusce scelerisque urna non sem interdum, nec maximus turpis rutrum.</p>
                <button className="home-button" type="submit">Learn More</button>
              </div>
            </div>
          </div>
        </div>
  </div>
</section>


  <section className="sponsors">
    <h2 className="home-h2">Our Sponsors</h2>
      <div className="row">
        <div className="col-sm-4">
          <img src="./vland-logo.png" alt="Vland" style={{width: "40%", height: "auto"}}></img>
        </div>
        <div className="col-sm-4">
          <img src="./bc-coils-logo.png" alt="BC Coils" style={{width: "40%", height: "auto"}}></img>
        </div>
        <div className="col-sm-4">
          <img src="./rays-te37.png" alt="Rays" style={{width: "60%", height: "auto"}}></img>
        </div>
      </div>

</section>
<br></br>
<br></br>
<div className="customer-reviews">
  <h2>Customer Reviews</h2>
  <div className="row">
    <div className="col-sm-6">
      <div className="review">
        <div className="reviewer-info">
          <img src="John.jpg" alt="Customer 1" style={{ width: 50, height: "auto" }}></img>
          <h3>John Doe</h3>
        </div>
        <p className="review-text">Pellentesque et ligula dapibus, consectetur libero id, suscipit mauris. Morbi in leo ac ante volutpat vulputate. Nam viverra est nec metus ultrices eleifend. Vestibulum blandit turpis vel lorem eleifend malesuada.</p>
      </div>
    </div>
    <div className="col-sm-6">
      <div className="review">
        <div className="reviewer-info">
          <img src="Jane.jpg" alt="Customer 2" style={{ width: 50, height: "auto" }}></img>
          <h3>Jane Smith</h3>
        </div>
        <p className="review-text">Pellentesque et ligula dapibus, consectetur libero id, suscipit mauris. Morbi in leo ac ante volutpat vulputate. Nam viverra est nec metus ultrices eleifend. Vestibulum blandit turpis vel lorem eleifend malesuada.</p>
      </div>
    </div>
  </div>
</div>

      <Footer />
      </div>
    </div>
  );
}
