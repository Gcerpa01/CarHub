import Header from '../../../components/header'
import Footer from '../../../components/footer'
import '.././Shop.css';

export default function Exhaust() {
  return (
    <><div className="App">
      <Header />
      <h2 class="head">Performance Exhaust</h2>
      <br></br>
    </div><div class="container overflow-hidden text-center">
        <div class="row gy-4">
          <div class="col-4">
            <button class="part"><a href="/exhaust-systems"><img src="systems.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><div class="p-2">Exhaust Systems</div></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/manifolds-headers"><img src="manifolds.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/manifolds-headers"><div class="p-2">Manifolds & Headers</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/downpipes"><img src="downpipes.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/downpipes"><div class="p-2">Downpipes</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/o2-housings"><img src="housings.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/o2-housings"><div class="p-2">O2 Housings & Turbo Outlets</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/error"><img src="muffler.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/error"><div class="p-2">Mufflers & Resonators</div></a></button>
          </div>
          <div class="col-4">
            <button class="part"><a href="/error"><img src="gaskets.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><a href="/error"><div class="p-2">Exhaust Gaskets & Hardware</div></a></button>
          </div>
        </div>
        <br></br>
        <h2 class="head">Performance Exhaust</h2>
        <br></br>
        <p class="category-desciption">
          The right performance exhaust system will make your engine roar in a way that only an exceptional sound 
          could–throaty and rich with power. Our exhaust systems are not just any pipes to be heard, but rather 
          signals of strength to turn heads on track day or in the streets. The performance exhaust system is a 
          key component to an individual's driving experience. What sounds good depends on the kind of car, but 
          the exhaust note's rumble, low-end grunt, or scream should create that customized feeling for every 
          driver no matter what vehicle they drive.
        </p>
        <Footer />
      </div></>
  );
}