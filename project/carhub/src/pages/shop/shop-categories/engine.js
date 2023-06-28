import Header from '../../../components/header'
import Footer from '../../../components/footer'
import '.././Shop.css';

export default function Engine() {
  return (
    <><div className="App">
      <Header />
      <h2 class="head">Engine</h2>
      <br></br>
    </div><div class="container overflow-hidden text-center">
        <div class="row gy-4">
          <div class="col-4">
            <button class="part"><a href="/error"><img src="cooling.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/error"><div class="p-2">Cooling System Components</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/error"><img src="cylinder-head.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/error"><div class="p-2">Cylinder Heads & Valvetrain</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/error"><img src="engine-internals.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/error"><div class="p-2">Engine Internals & Assemblies</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/error"><img src="oilfilter.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/error"><div class="p-2">Engine Oil & Filters</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/error"><img src="gasket.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/error"><div class="p-2">Gaskets & Seals</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/error"><img src="EngineMounts.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/error"><div class="p-2">Motor Mounts</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/error"><img src="OilCooling.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/error"><div class="p-2">Oil System Components</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/error"><img src="TimingBelt.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/error"><div class="p-2">Timing Components</div></a></button>
          </div>
        </div>
        <br></br>
        <h2 class="head">Engine</h2>
        <br></br>
        <p class="category-desciption">
          No sound may be more associated with automotive performance than the hum – or 
          growl, if you prefer – of a finely tuned engine. Motoring down the highway with a 
          powerful big block under your hood is the surest way to turn heads while sending 
          the message you want to send. But engine upgrades aren’t just for muscle car owners – 
          your everyday car can also benefit from new valve covers or an aftermarket piston kit.
        </p>
        <Footer />
      </div></>
  );
}