import Header from '../components/header'
import Footer from '../components/footer'
import { useState } from 'react';

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
      <div className="home-container">
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
        {/* We were rendering the same column over and over again while changing the inner content */}
        {/* <div className="col-lg-4">
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
        </div> */}

        {/* Instead, the Reactive way, is to store those products in data, and then loop over it */}
        {/* First we check if we have products */}
        {/* We have 3 Products currently, so this loop will run 3 times */}
        {products.length > 0 && products.map((product, productIndex) => {
            return ( // Will render the a column for each product
              <div id={product.id} className="col-lg-4" key={productIndex}>
                <div className="card">
                  <img className="card-img-top" src={product.image} alt={product.title}></img>
                  <div className="card-body">
                    <h3 className="card-title">{product.title}</h3>
                    <p className="card-text">{product.description}</p>
                    {/* Ternerary Operator // One Line If Else Statement */}
                    {/* Adding a function which will catch when the user clicks this button */}
                    <button onClick={(e) => goToShop(e)} className="btn btn-primary">Learn More</button>
                  </div>
                </div>
              </div>
            )
          })
        }  
      </div>  
    </section>

  <section className="sponsors">
    <h2>Our Sponsors</h2>
    <div className="container">
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
    </div>
  );
}
