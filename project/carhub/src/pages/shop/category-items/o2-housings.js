import Header from '../../../components/header'
import Footer from '../../../components/footer'
import '.././Shop.css';

export default function O2Housings() {
  return (
    <><div className="App">
      <Header />
      <h2 class="head">O2 Housings & Turbo Outlets</h2>
      <br></br>
    </div><div class="container overflow-hidden text-center">
        <div class="row gy-4">
          <div class="col-4">
            <button class="part"><a href="/tomei-outlet"><img src="tomei-outlet.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/tomei-outlet"><div class="p-2">Tomei Expreme V2 Turbine Outlet | 2001-2006 Mitsubishi Evo 7-9 (CH-TO79)</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="place-holder.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">"Part Name" (CH-"Part Number")</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="place-holder.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">"Part Name" (CH-"Part Number")</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="place-holder.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">"Part Name" (CH-"Part Number")</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="place-holder.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">"Part Name" (CH-"Part Number")</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="place-holder.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">"Part Name" (CH-"Part Number")</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="place-holder.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">"Part Name" (CH-"Part Number")</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="place-holder.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">"Part Name" (CH-"Part Number")</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="place-holder.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">"Part Name" (CH-"Part Number")</div></button>
          </div>
        </div>
        <br></br>
        <Footer />
      </div></>
  );
}