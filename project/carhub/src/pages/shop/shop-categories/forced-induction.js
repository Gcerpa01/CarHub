import Header from '../../../components/header'
import Footer from '../../../components/footer'
import '.././Shop.css';

export default function ForcedInduction() {
  return (
    <><div className="App">
      <Header />
      <h2 class="head">Forced Induction Turbos & Superchargers</h2>
      <br></br>
    </div><div class="container overflow-hidden text-center">
        <div class="row gy-4">
          <div class="col-4">
            <button class="part"><a href="/exhaust-systems"><img src="BOV.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><div class="p-2">Blow Off Valves & Accessories</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="BoostControl.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Boost Controllers</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="intercoolers.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Intercoolers & Piping</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="Supercharger.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Supercharger Systems & Accessories</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="Turbo.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Turbochargers, Kits & Accessories</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="Wastegate.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Wastegates & Accessories</div></button>
          </div>
        </div>
        <br></br>
        <h2 class="head">Why Turbos are Cool</h2>
        <br></br>
        <p class="category-desciption">
            All natural is all the rage for cars today. We love natural, but when 
            it’s time to feed your engine, natural will only get you so far–especially 
            on the performance side of things. While atmospheric pressure by itself feeds 
            adequate air to your cold air intake ­system for dropping the kiddos off at 
            practice or running errands (power output of a typical street engine), satisfying 
            your need for speed may require something more. Our forced induction engine systems 
            and components give engines the help they need to run more powerfully than with natural 
            aspiration alone. There’s more turbocharging or supercharging your engine than just the 
            main system, and MAPerformance has the go fast components to keep your suddenly powerful 
            engine from becoming a useless pile of metal.
        </p>
        <Footer />
      </div></>
  );
}