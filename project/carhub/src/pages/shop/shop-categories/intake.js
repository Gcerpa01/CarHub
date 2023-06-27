import Header from '../../../components/header'
import Footer from '../../../components/footer'
import '.././Shop.css';

export default function Intake() {
  return (
    <><div className="App">
      <Header />
      <h2 class="head">Air Intakes</h2>
      <br></br>
    </div><div class="container overflow-hidden text-center">
        <div class="row gy-4">
          <div class="col-4">
            <button class="part"><a href="/exhaust-systems"><img src="air-induction.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><div class="p-2">Air Induction</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="intake-manifold.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Intake Manifolds & Accessories</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="throttle-body.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Throttle Bodies & Gaskets</div></button>
          </div>
        </div>
        <br></br>
        <h2 class="head">Aftermarket Intake Systems</h2>
        <br></br>
        <p class="category-desciption">
            There’s a reason why air intakes and exhausts are some of the most popular mods for diehard tuners, and it comes 
            down to horsepower. Because exhausts and intakes allow you to pull in — and expel — more air from the engine, they 
            can offer some real horsepower benefits, in addition to changing the notes coming from your engine bay and exhaust.
            <br></br>
            For these reasons, a custom air intake or exhaust upgrade is a great place to start for first-time tuners. Regardless 
            if you need a replacement air filter or are in the market for a complete air intake and exhaust kit, 
            CarHub has the high-quality aftermarket performance bolt-ons required for the job.
        </p>
        <Footer />
      </div></>
  );
}