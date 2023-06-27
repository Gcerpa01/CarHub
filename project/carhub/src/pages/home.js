import { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {

  let [products, setProducts] = useState([
    // {
    //   id: 1,
    //   image: `./ford1.png`,
    //   title: `2023 Ford Mustang`,
    //   description: `The 2023 Ford Mustang is an iconic American muscle car that combines power, performance, and style. With its aggressive design and muscular stance, the Mustang embodies a sense of speed and dominance on the road.`,
    // },
    // {
    //   id: 2,
    //   image: `./Crown.png`,
    //   title: `2023 Toyota Crown`,
    //   description: `The 2023 Toyota Crown is a luxury sedan that blends sophistication, comfort, and advanced technology. As one of Toyota's flagship models, the Crown offers a refined and elegant design.`,
    // },
    // {
    //   id: 3,
    //   image: `./infit.webp`,
    //   title: `2023 Infiniti Q50`,
    //   description: `The 2023 Infiniti Q50 is a luxury sports sedan that combines style, performance, and advanced technology. With its sleek and aggressive design, it exudes a sense of elegance and athleticism on the road.`,
    // },
    {
      id: 4,
      image: `./TE37.png`,
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
      link: `https://www.amazon.com/gp/product/B0B31L31M1/ref=ox_sc_saved_title_1?smid=A13WFIO3K4K52G&psc=1`,
    },
  ]);

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
    
    <section className="productsSection container">
      <h2 className="text-center">Featured Products</h2>
      <div className="row">
        {products.length > 0 && products.map((product, productIndex) => {
          return (
            <div id={product.id} className="col-lg-4" key={productIndex}>
              <div className="card">
                <img className="card-img-top" src={product.image} alt={product.title}></img>
                <div className="card-body">
                  <h3 className="card-title">{product.title}</h3>
                  <p className="card-text">{product.description}</p>
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>  
    </section>

  <section className="sponsors">
    <h2>Our Sponsors</h2>
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <img src="./vland-logo.png" alt="Vland" style={{width: "40%", height: "auto"}} />
        </div>
        <div className="col-sm-4">
          <img src="./bc-coils-logo.png" alt="BC" style={{width: "40%", height: "auto"}} />
        </div>
        <div className="col-sm-4">
          <img src="./rays-te37.png" alt="Rays" style={{width: "60%", height: "auto"}} />
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