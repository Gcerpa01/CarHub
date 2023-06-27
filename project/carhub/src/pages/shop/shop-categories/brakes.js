import Header from '../../../components/header'
import Footer from '../../../components/footer'
import '.././Shop.css';

export default function Brakes() {
  return (
    <><div className="App">
      <Header />
      <h2 class="head">Brakes, Brake Accessories & Components</h2>
      <br></br>
    </div><div class="container overflow-hidden text-center">
        <div class="row gy-4">
          <div class="col-4">
            <button class="part"><a href="/exhaust-systems"><img src="rotor.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><div class="p-2">Brake Rotors</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="brake-pad.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Performance Brake Pads</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="brake-fluid.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">High Performance Brake Fluids</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="brake-line.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Brake Lines</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="bbk.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Big Brake Kits Performance Upgrades</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="brake-kit.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Brake Packages - Upgrade Kits</div></button>
          </div>
        </div>
        <br></br>
        <h2 class="head">Aftermarket Brakes</h2>
        <br></br>
        <p class="category-desciption">
            There is something about going fast that can make your heart beat faster and take the wind out of you. 
            The most exhilarating moments are those where we get pushed back in our seats with a wide open stretch ahead. 
            Through the many decades of driving, a lot has changed but one thing has remained true: speed is pure fun. 
            <br></br>
            But how do you corner well when you’re going that fast? How do you stop on a dime? What about those aggressive 
            stops for high performance street vehicles? Sometimes we get so caught up in horsepower and torque that we forget 
            about stopping power too. High-quality performance brakes are truly just as important as a power upgrade. And that’s 
            where we come in. Our extensive line for aftermarket brakes products is second-to-none on the internet. We love developing 
            and stocking top-notch products for our performance drivers and enthusiasts. Safety is always #1 for us, especially on 
            the track, but our brakes look great too. Made with high-quality materials and durable components, you won’t be disappointed.
        </p>
        <Footer />
      </div></>
  );
}