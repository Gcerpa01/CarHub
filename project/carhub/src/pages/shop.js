import Header from '../components/header'
import Footer from '../components/footer'

export default function Shop() {
  return (
    <div className="App">
      <Header />
      <h2 class= "part-selection">Part Selection</h2>
      <div class="container part-list">
        <div class="row row-cols-9">
          <div class="col">Exhaust</div>
          <div class="col">Exterior</div>
          <div class="col">Forced Induction</div>
          <div class="col">Suspension</div>
          <div class="col">Fueling</div>
          <div class="col">Wheels</div>
          <div class="col">Tires</div>
          <div class="col">Brakes</div>
          <div class="col">Intake</div>
        </div>
      </div>
      <div class="container overflow-hidden text-center">
        <div class="row gy-4">
          <div class="col-4">
            <img src="BMW-Exhaust.jpg" class ="rounded" width ="100" height ="100"/>
            <div class="p-2">Bomiz Full Titanium Valvetronic Exhaust for BMW E9x M3 (CH-FTX9)</div>
          </div>
          <div class="col-4">
            <img src="Precision-Turbo-6266.jpg" class ="rounded" width ="100" height ="100"/>
            <div class="p-2">Precision Turbo Street & Race PT6266 CEA JB Turbocharger - 735WHP (CH-6266)</div>
          </div>
          <div class="col-4">
            <img src="TE37.jpg" class ="rounded" width ="100" height ="100"/>
            <div class="p-2">Volk TE37 Saga Diamond Dark Gunmetal Wheel SET 18x9.5/5x114.3/+38 Offset (CH-8EDX)</div>
          </div>
          <div class="col-4">
            <img src="BC-Coils.jpg" class ="rounded" width ="100" height ="100"/>
            <div class="p-2">BR Series Evo X Coilovers By BC Racing | 2008-2015 Mitsubishi Evo X (CH-20BR)</div>
          </div>
          <div class="col-4">
            <img src="VLAND-EvoX.jpg" class ="rounded" width ="100" height ="100"/>
            <div class="p-2">2008-2017 Mitsubishi Evo X RGBW LED Boards (AUDI STYLE) VLAND Projectors (CH-EVLH)</div>
          </div>
          <div class="col-4">
            <img src="ETS.jpg" class ="rounded" width ="100" height ="100"/>
            <div class="p-2">ETS 03-06 MITSUBISHI EVO 8/9 STANDARD TANK INTERCOOLER (CH-IC03)</div>
          </div>
      </div>
</div>
      <Footer />
    </div>
  );
}
