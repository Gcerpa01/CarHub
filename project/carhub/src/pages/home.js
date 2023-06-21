import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="App">
      <Header />
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="display-4">Welcome to our website!</h1>
        <p class="lead">Explore our amazing products and services.</p>
        <button class="btn btn-primary btn-lg">Get Started</button>
      </div>
    </section>
    
    <section class="container">
      <h2 class="text-center">Featured Products</h2>
      <div class="row">
        <div class="col-lg-4">
          <div class="card">
            <img class="card-img-top" src="ford1.png" alt="2023 Ford Mustang"></img>
            <div class="card-body">
              <h3 class="card-title">2023 Ford Mustang</h3>
              <p class="card-text">The 2023 Ford Mustang is an iconic American muscle car that combines power, performance, and style. With its aggressive design and muscular stance, the Mustang embodies a sense of speed and dominance on the road</p>
              <button class="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <img class="card-img-top" src="Crown.png" alt="2023 Toyota Crown"></img>
            <div class="card-body">
              <h3 class="card-title">2023 Toyota Crown</h3>
              <p class="card-text">The 2023 Toyota Crown is a luxury sedan that blends sophistication, comfort, and advanced technology. As one of Toyota's flagship models, the Crown offers a refined and elegant design.</p>
              <button class="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
              <img class="card-img-top" src="infit.webp" alt="2023 Infiniti Q50"></img>
              <div class="card-body">
                <h3 class="card-title">2023 Infiniti Q50</h3>
                <p class="card-text">The 2023 Infiniti Q50 is a luxury sports sedan that combines style, performance, and advanced technology. With its sleek and aggressive design, it exudes a sense of elegance and athleticism on the road.</p>
                <button class="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>  
    </section>

  <section class="sponsors">
    <h2>Our Sponsors</h2>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <img src="Ford.png" alt="Car 1" style={{width: "40%", height: "auto"}}></img>
        </div>
        <div class="col-sm-4">
          <img src="toyota.png" alt="Car 2" style={{width: "40%", height: "auto"}}></img>
        </div>
        <div class="col-sm-4">
          <img src="infinity.png" alt="Car 3" style={{width: "60%", height: "auto"}}></img>
        </div>
      </div>
    </div>

</section>
<br></br>
<br></br>
  <div class="customer-reviews">
    <h2>Customer Reviews</h2>
    <div class="review">
      <div class="reviewer-info">
        <img src="John.jpg" alt="Customer 1" style={{width: 200, height: "auto"}}></img>
        <h3>John Doe</h3>
      </div>
      <p class="review-text">Leo was here.... random comments from customers </p>
    </div>
    <br></br>
    <div class="review">
      <div class="reviewer-info">
        <img src="Jane.jpg" alt="Customer 2" style={{width: 200, height: "auto"}}></img>
        <h3>Jane Smith</h3>
      </div>
      <p class="review-text">Pellentesque et ligula dapibus, consectetur libero id, suscipit mauris. Morbi in leo ac ante volutpat vulputate. Nam viverra est nec metus ultrices eleifend. Vestibulum blandit turpis vel lorem eleifend malesuada.</p>
    </div>
  </div>
      <Footer />
    </div>
  );
}
