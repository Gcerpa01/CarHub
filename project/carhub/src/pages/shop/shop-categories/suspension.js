import Header from '../../../components/header'
import Footer from '../../../components/footer'
import '.././Shop.css';

export default function Suspension() {
  return (
    <><div className="App">
      <Header />
      <h2 class="head">Suspension Components & Upgrades</h2>
      <br></br>
    </div><div class="container overflow-hidden text-center">
        <div class="row gy-4">
          <div class="col-4">
            <button class="part"><a href="/error"><img src="alignment.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/error"><div class="p-2">Alignment Components & Accessories</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/error"><img src="coilover.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/error"><div class="p-2">Coilovers</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/error"><img src="swaybar.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/error"><div class="p-2">Swaybars & End Links</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/error"><img src="rollcage.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/error"><div class="p-2">Roll Cages, Chassis Braces & Accessories</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/error"><img src="SuspensionComp.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/error"><div class="p-2">Performance Suspension</div></a></button>
          </div>
        </div>
        <br></br>
        <h2 class="head">Suspension is Necessary</h2>
        <br></br>
        <p class="category-desciption">
            To paraphrase Cole Trickle, the thrill of performance is being 
            able to control something that’s out of control. But if you don’t 
            have the right suspension and brakes on your car, there won’t be much 
            controlling going on no matter how good a driver you are. When you’re approaching 
            a hairpin turn or a gaggle of traffic, you’ll be glad you’re using premium 
            components from Modern Automotive Performance. We offer the best available brakes 
            and suspension parts and accessories to help your vehicle hug the road in any conditions.
        </p>
        <Footer />
      </div></>
  );
}