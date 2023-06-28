import Header from '../../../components/header'
import Footer from '../../../components/footer'
import '.././Shop.css';

export default function ExhaustSystems() {
  return (
    <><div className="App">
      <Header />
      <h2 class="head">Exhaust Systems and Components</h2>
      <br></br>
      <h2 class="head">Featured Products</h2>
    </div><div class="container overflow-hidden text-center">
        <div class="row gy-4">
          <div class="col-4">
            <button class="part"><a href="/itemshop"><img src="BMW-Exhaust.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><div class="p-2">Bomiz Full Titanium Valvetronic Exhaust for BMW E9x M3 (CH-FTX9)</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="Precision-Turbo-6266.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Precision Turbo Street & Race PT6266 CEA JB Turbocharger - 735WHP (CH-6266)</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="TE37.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Volk TE37 Saga Diamond Dark Gunmetal Wheel SET 18x9.5/5x114.3/+38 Offset (CH-8EDX)</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="BC-Coils.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">BR Series Evo X Coilovers By BC Racing | 2008-2015 Mitsubishi Evo X (CH-20BR)</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="VLAND-EvoX.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">2008-2017 Mitsubishi Evo X RGBW LED Boards (AUDI STYLE) VLAND Projectors (CH-EVLH)</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="ETS.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">ETS 03-06 MITSUBISHI EVO 8/9 STANDARD TANK INTERCOOLER (CH-IC03)</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="ETS-intake.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">ETS 08-16 MITSUBISHI EVO X STOCK LOCATION TITANIUM INTAKE (CH-ETS4)</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="ETS-tkit.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">ETS 08-16 MITSUBISHI EVO X T4 TWIN SCROLL TURBO KIT (CH-ETST)</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="ps4s.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Michelin Pilot Sport 4 S 275/35/R18 (CH-MPS4)</div></button>
          </div>
        </div>
        <br></br>
        <Footer />
      </div></>
  );
}