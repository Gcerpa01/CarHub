import Header from '../../../components/header'
import Footer from '../../../components/footer'
import '.././Shop.css';

export default function Styling() {
  return (
    <><div className="App">
      <Header />
      <h2 class="head">Styling</h2>
      <br></br>
    </div><div class="container overflow-hidden text-center">
        <div class="row gy-4">
          <div class="col-4">
            <button class="part"><a href="/exhaust-systems"><img src="accessories.jpg" class="rounded" width="150" height="150" /></a></button>
            <button class="part"><div class="p-2">Exterior Styling Accessories</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="interior.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Automotive Interior Parts</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="wing.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Hoods, Spoilers & Body Panels</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="lighting.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Automotive Lighting</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="dress-up.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Engine Dress-Up</div></button>
          </div>
          <div class="col-4">
            <button class="part"><img src="detailing.jpg" class="rounded" width="150" height="150" /></button>
            <button class="part"><div class="p-2">Car Detailing & Care</div></button>
          </div>
        </div>
        <br></br>
        <h2 class="head">Styling</h2>
        <br></br>
        <p class="category-desciption">
        In the automotive world, it isn’t just about what’s underneath the hood – appearances
         matter as well. Now, before you start having flashbacks, we’re not saying that cars 
         are like high school. Maybe appearances don’t matter in the sense of a new spoiler or 
         side deflector helping your torque ratio at the apex of a corner. But why put the time 
         and effort into making your vehicle into a mean machine on the inside if it still looks 
         like a grocery-getter on the outside?
        </p>
        <Footer />
      </div></>
  );
}