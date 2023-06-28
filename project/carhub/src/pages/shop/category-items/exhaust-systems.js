import Header from '../../../components/header'
import Footer from '../../../components/footer'
import '.././Shop.css';

export default function ExhaustSystems() {
  return (
    <><div className="App">
      <Header />
      <h2 class="head">Exhaust Systems</h2>
      <br></br>
    </div><div class="container overflow-hidden text-center">
        <div class="row gy-4">
          <div class="col-4">
            <button class="part"><a href="/itemshop"><img src="BMW-Exhaust.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/itemshop"><div class="p-2">Bomiz Full Titanium Valvetronic Exhaust for BMW E9x M3 (CH-FTX9)</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/error"><img src="place-holder.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/error"><div class="p-2">"Part Name" (CH-"Part Number")</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/error"><img src="place-holder.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/error"><div class="p-2">"Part Name" (CH-"Part Number")</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/error"><img src="place-holder.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/error"><div class="p-2">"Part Name" (CH-"Part Number")</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/error"><img src="place-holder.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/error"><div class="p-2">"Part Name" (CH-"Part Number")</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/error"><img src="place-holder.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/error"><div class="p-2">"Part Name" (CH-"Part Number")</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/error"><img src="place-holder.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/error"><div class="p-2">"Part Name" (CH-"Part Number")</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/error"><img src="place-holder.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/error"><div class="p-2">"Part Name" (CH-"Part Number")</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/error"><img src="place-holder.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/error"><div class="p-2">"Part Name" (CH-"Part Number")</div></a></button>
          </div>
        </div>
        <br></br>
        <Footer />
      </div></>
  );
}