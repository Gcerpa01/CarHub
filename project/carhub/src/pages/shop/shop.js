
import Header from '../../components/header'
import Footer from '../../components/footer'
import './Shop.css';
// putting comment to track changes

export default function Shop() {
  return (
    <div className="App">
      <Header />
      <div>
      <h2 className="head">Part Selection</h2>
      </div>
      <div className="container part-list">
        <div className="row row-cols-9">
          <div className="col"> <button className="partButton"><a href="/itemshop">Exhaust</a></button></div>
          <div className="col"> <button className="partButton"><a href="/">Exterior</a></button></div>
          <div className="col"> <button className="partButton"><a href="/">Forced Induction</a></button></div>
          <div className="col"> <button className="partButton"><a href="/">Suspension</a></button></div>
          <div className="col"> <button className="partButton"><a href="/">Fueling</a></button></div>
          <div className="col"> <button className="partButton"><a href="/">Wheels</a></button></div>
          <div className="col"> <button className="partButton"><a href="/">Tires</a></button></div>
          <div className="col"> <button className="partButton"><a href="/">Brakes</a></button></div>
          <div className="col"> <button className="partButton"><a href="/">Intake</a></button></div>
        </div>
      </div>
      <br></br>
      <div>
      <h2 className= "head">Featured Products</h2>
      </div>
      <div className="container overflow-hidden text-center">
        <div className="row gy-4">
          <div className="col-4">
            <button className="part"><a href="/itemshop"><img src="BMW-Exhaust.jpg" class ="rounded" width ="150" height ="150"/></a></button>
            <button className="part"><div className="p-2">Bomiz Full Titanium Valvetronic Exhaust for BMW E9x M3 (CH-FTX9)</div></button>
          </div>
          <div className="col-4">
            <button className="part"><img src="Precision-Turbo-6266.jpg" class ="rounded" width ="150" height ="150"/></button>
            <button className="part"><div className="p-2">Precision Turbo Street & Race PT6266 CEA JB Turbocharger - 735WHP (CH-6266)</div></button>
          </div>
          <div className="col-4">
            <button className="part"><img src="TE37.jpg" class ="rounded" width ="150" height ="150"/></button>
            <button className="part"><div className="p-2">Volk TE37 Saga Diamond Dark Gunmetal Wheel SET 18x9.5/5x114.3/+38 Offset (CH-8EDX)</div></button>
          </div>
          <div className="col-4">
            <button className="part"><img src="BC-Coils.jpg" class ="rounded" width ="150" height ="150"/></button>
            <button className="part"><div className="p-2">BR Series Evo X Coilovers By BC Racing | 2008-2015 Mitsubishi Evo X (CH-20BR)</div></button>
          </div>
          <div className="col-4">
            <button className="part"><img src="VLAND-EvoX.jpg" class ="rounded" width ="150" height ="150"/></button>
            <button className="part"><div className="p-2">2008-2017 Mitsubishi Evo X RGBW LED Boards (AUDI STYLE) VLAND Projectors (CH-EVLH)</div></button>
          </div>
          <div className="col-4">
            <button className="part"><img src="ETS.jpg" class ="rounded" width ="150" height ="150"/></button>
            <button className="part"><div className="p-2">ETS 03-06 MITSUBISHI EVO 8/9 STANDARD TANK INTERCOOLER (CH-IC03)</div></button>
          </div>
          <div className="col-4">
            <button className="part"><img src="ETS-intake.jpg" class ="rounded" width ="150" height ="150"/></button>
            <button className="part"><div className="p-2">ETS 08-16 MITSUBISHI EVO X STOCK LOCATION TITANIUM INTAKE (CH-ETS4)</div></button>
          </div>
          <div className="col-4">
            <button className="part"><img src="ETS-tkit.jpg" class ="rounded" width ="150" height ="150"/></button>
            <button className="part"><div className="p-2">ETS 08-16 MITSUBISHI EVO X T4 TWIN SCROLL TURBO KIT (CH-ETST)</div></button>
          </div>
          <div className="col-4">
            <button className="part"><img src="ps4s.jpg" class ="rounded" width ="150" height ="150"/></button>
            <button className="part"><div className="p-2">Michelin Pilot Sport 4 S 275/35/R18 (CH-MPS4)</div></button>
          </div>
      </div>
      <br></br>
      <div>
        <h2 className="head">What people are saying about us</h2>
        <br></br>
        <div className="reviews">
          <div className="review-img">
            <img src="dniemela.jpg" class ="rounded" width ="100" height ="100"/>
            <h3 className="review-name">Devin Niemela</h3>
          </div>
          <br></br>
          <h1 className="review">Everyone I talk to at CARHUB is always willing to lend a helping hand. They get me to the right place, have what I need, and get it to me FAST! My favorite place to go for help on my builds!</h1>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
}