import Header from '../../components/header'
import Footer from '../../components/footer'
import './Shop.css';

export default function Fueling() {
  return (
    <><div className="App">
      <Header />
      <h2 class="head">Performance Fueling Parts</h2>
      <br></br>
    </div><div class="container overflow-hidden text-center">
        <div class="row gy-4">
          <div class="col-4">
            <button class="part"><a href="/exhaust-systems"><img src="Injectors.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><div class="p-2">Performance Fuel Injectors & Accessories</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="FuelLine.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">High Performance Fuel Lines, Filters & Accessories</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="FPR.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Fuel Pressure Regulators & Accessories</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="fp.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Fuel Pumps, Surge Tanks & Install Kits</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="fr.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Fuel Rails, Kits & Accessories</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="fs.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Performance Fuel System Kits & Packages</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="nos.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Nitrous Systems, Kits & Accessories</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="WaterSystem.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Water/Methanol Injection Systems</div></button>
          </div>
        </div>
        <br></br>
        <h2 class="head">Fuel Setup</h2>
        <br></br>
        <p class="category-desciption">
            When it comes to performance, having the right fuel and fueling 
            system is vital. You probably won’t become a great athlete if you eat 
            potato chips and drink root beer at every meal, and your new engine parts 
            won’t perform up to snuff if they aren’t getting the juice they need. More 
            power requires more fuel, and you’re looking to replace worn-out parts or 
            install an entirely new setup, our fuel system components and additives will 
            keep your engine well-fed at all times.
        </p>
        <Footer />
      </div></>
  );
}