
import Header from '../../components/header'
import Footer from '../../components/footer'
import './Shop.css';

export default function Shop() {
  return (
    <div className="App">
      <Header />
      <div>
      <h2 class="contenth2-heading">Part Selection</h2>
      </div>
      <div class="container part-list">
        <div class="row row-cols-9">
          <div class="col"> <button class="partButton"><a href="/exhaust">Exhaust</a></button></div>
          <div class="col"> <button class="partButton"><a href="/styling">Styling</a></button></div>
          <div class="col"> <button class="partButton"><a href="/forced-induction">Forced Induction</a></button></div>
          <div class="col"> <button class="partButton"><a href="/suspension">Suspension</a></button></div>
          <div class="col"> <button class="partButton"><a href="/fueling">Fueling</a></button></div>
          <div class="col"> <button class="partButton"><a href="/Wheels">Wheels</a></button></div>
          <div class="col"> <button class="partButton"><a href="/engine">Engine</a></button></div>
          <div class="col"> <button class="partButton"><a href="/brakes">Brakes</a></button></div>
          <div class="col"> <button class="partButton"><a href="/intake">Intake</a></button></div>
        </div>
      </div>
      <br></br>
      <div>
      <h2 class= "head">Featured Products</h2>
      </div>
      <div class="container overflow-hidden text-center">
        <div class="row gy-4">
          <div class="col-4">
            <button class="part"><a href="/itemshop"><img alt="BMW Exhaust" src="BMW-Exhaust.jpg" class="rounded" width ="150" height ="150"/></a></button>
            <button class="part"><a href="/itemshop"><div class="p-2">Bomiz Full Titanium Valvetronic Exhaust for BMW E9x M3 (CH-FTX9)</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/precision-turbo"><img alt="Precision-Turbo" src="Precision-Turbo-6266.jpg" class="rounded" width ="150" height ="150"/></a></button>
            <button class="part"><a href="/precision-turbo"><div class="p-2">Precision Turbo Street & Race PT6266 CEA JB Turbocharger - 735WHP (CH-6266)</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/te37"><img alt="TE37" src="TE37.jpg" class="rounded" width ="150" height ="150"/></a></button>
            <button class="part"><a href="/te37"><div class="p-2">Volk TE37 Saga Diamond Dark Gunmetal Wheel SET 18x9.5/5x114.3/+38 Offset (CH-8EDX)</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/bc-coils"><img alt="BC Coils" src="BC-Coils.jpg" class="rounded" width ="150" height ="150"/></a></button>
            <button class="part"><a href="/bc-coils"><div class="p-2">BR Series Evo X Coilovers By BC Racing | 2008-2015 Mitsubishi Evo X (CH-20BR)</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/vland-headlights"><img alt="VLAND EvoX" src="VLAND-EvoX.jpg" class="rounded" width ="150" height ="150"/></a></button>
            <button class="part"><a href="/vland-headlights"><div class="p-2">2008-2017 Mitsubishi Evo X (AUDI STYLE) VLAND Projectors (CH-EVLH)</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/ets-intercooler"><img alt="ETS" src="ETS.jpg" class="rounded" width ="150" height ="150"/></a></button>
            <button class="part"><a href="/ets-intercooler"><div class="p-2">ETS 03-06 MITSUBISHI EVO 8/9 STANDARD TANK INTERCOOLER (CH-IC03)</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/ets-intake"><img alt="ETS Intake" src="ETS-intake.jpg" class="rounded" width ="150" height ="150"/></a></button>
            <button class="part"><a href="/ets-intake"><div class="p-2">ETS 08-16 MITSUBISHI EVO X STOCK LOCATION TITANIUM INTAKE (CH-ETS4)</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/ets-turbo-kit"><img alt="ETS tkit" src="ETS-tkit.jpg" class="rounded" width ="150" height ="150"/></a></button>
            <button class="part"><a href="/ets-turbo-kit"><div class="p-2">ETS 08-16 MITSUBISHI EVO X T4 TWIN SCROLL TURBO KIT (CH-ETST)</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/fuel-injectors"><img alt="fic6" src="fic6.jpg" class="rounded" width ="150" height ="150"/></a></button>
            <button class="part"><a href="/fuel-injectors"><div class="p-2">Fuel Injector Clinic 1650cc High-Z Injector Set | 2008-2015 Mitsubishi Evo X (CH-FIC6)</div></a></button>
          </div>
      </div>
      <br></br>
      <div>
        <h2 class="head">What people are saying about us</h2>
        <br></br>
        <div class="reviews">
          <div class="review-img">
            <img alt="dniemela" src="dniemela.jpg" class="rounded" width ="100" height ="100"/>
            <h3 class="review-name">Devin Niemela</h3>
          </div>
          <br></br>
          <h1 class="review">Everyone I talk to at CARHUB is always willing to lend a helping hand. They get me to the right place, have what I need, and get it to me FAST! My favorite place to go for help on my builds!</h1>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
}
