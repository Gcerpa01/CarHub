import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="App">
      <Header />
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="display-4">Welcome to our website!</h1>
        <p className="lead">Explore our amazing products and services.</p>
        <button className="btn btn-primary btn-lg">Get Started</button>
      </div>
    </section>
    
    <section className="container">
      <h2 className="text-center">Featured Products</h2>
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <img className="card-img-top" src="ford1.png" alt="2023 Ford Mustang"></img>
            <div className="card-body">
              <h3 className="card-title">2023 Ford Mustang</h3>
              <p className="card-text">The 2023 Ford Mustang is an iconic American muscle car that combines power, performance, and style. With its aggressive design and muscular stance, the Mustang embodies a sense of speed and dominance on the road</p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <img className="card-img-top" src="Crown.png" alt="2023 Toyota Crown"></img>
            <div className="card-body">
              <h3 className="card-title">2023 Toyota Crown</h3>
              <p className="card-text">The 2023 Toyota Crown is a luxury sedan that blends sophistication, comfort, and advanced technology. As one of Toyota's flagship models, the Crown offers a refined and elegant design.</p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
            <div className="card">
              <img className="card-img-top" src="infit.webp" alt="2023 Infiniti Q50"></img>
              <div className="card-body">
                <h3 className="card-title">2023 Infiniti Q50</h3>
                <p className="card-text">The 2023 Infiniti Q50 is a luxury sports sedan that combines style, performance, and advanced technology. With its sleek and aggressive design, it exudes a sense of elegance and athleticism on the road.</p>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>  
    </section>

  <section className="sponsors">
    <h2>Our Sponsors</h2>
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <img src="Ford.png" alt="Car 1" style={{width: "40%", height: "auto"}}></img>
        </div>
        <div className="col-sm-4">
          <img src="toyota.png" alt="Car 2" style={{width: "40%", height: "auto"}}></img>
        </div>
        <div className="col-sm-4">
          <img src="infinity.png" alt="Car 3" style={{width: "60%", height: "auto"}}></img>
        </div>
      </div>
    </div>

</section>
<br></br>
<br></br>
  <div className="customer-reviews">
    <h2>Customer Reviews</h2>
    <div className="review">
      <div className="reviewer-info">
        <img src="John.jpg" alt="Customer 1" style={{width: 200, height: "auto"}}></img>
        <h3>John Doe</h3>
      </div>
      <p className="review-text">Leo was here.... random comments from customers </p>
    </div>
    <br></br>
    <div className="review">
      <div className="reviewer-info">
        <img src="Jane.jpg" alt="Customer 2" style={{width: 200, height: "auto"}}></img>
        <h3>Jane Smith</h3>
      </div>
      <p className="review-text">Pellentesque et ligula dapibus, consectetur libero id, suscipit mauris. Morbi in leo ac ante volutpat vulputate. Nam viverra est nec metus ultrices eleifend. Vestibulum blandit turpis vel lorem eleifend malesuada.</p>
    </div>
  </div>
      <Footer />
    </div>
  );
}
