import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Import the CSS file
import Groups from './pages/groups/groups';
import Home from './pages/home';
import Account from './pages/account/account';
import Messages from './pages/messages/messages';
import ItemShop from './pages/shop/item-pages/itemshop';
import Shop from './pages/shop/shop';
import Contact from './pages/contact';
import Login from './pages/account/login';
import Exhaust from './pages/shop/shop-categories/exhaust';
import ExhaustSystems from './pages/shop/category-items/exhaust-systems';
import Styling from './pages/shop/shop-categories/styling';
import ForcedInduction from './pages/shop/shop-categories/forced-induction';
import Suspension from './pages/shop/shop-categories/suspension';
import Fueling from './pages/shop/shop-categories/fueling';
import Wheels from './pages/shop/shop-categories/Wheels';
import Engine from './pages/shop/shop-categories/engine';
import Brakes from './pages/shop/shop-categories/brakes';
import Intake from './pages/shop/shop-categories/intake';
import Precision from './pages/shop/item-pages/precision-turbo';
import Te37 from './pages/shop/item-pages/te37';
import BCCoils from './pages/shop/item-pages/bc-coils';
import VLAND from './pages/shop/item-pages/vland-headlights';
import ETSIntercooler from './pages/shop/item-pages/ets-intercooler';
import ETSIntake from './pages/shop/item-pages/ets-intake';
import ETSTurboKit from './pages/shop/item-pages/ets-turbo-kit';
import FuelInjectors from './pages/shop/item-pages/fuel-injectors';
import ManifoldsHeaders from './pages/shop/category-items/manifolds-headers';
import SheepeyManifold from './pages/shop/item-pages/sheepey-manifold';
import Downpipes from './pages/shop/category-items/downpipes';
import ETSDownpipe from './pages/shop/item-pages/ets-downpipe';
import O2Housings from './pages/shop/category-items/o2-housings';
import TomeiOutlet from './pages/shop/item-pages/tomei-outlet';
import NotFound from './pages/shop/error';

function App() {
  return (
    <div className="App"> {/* Add the CSS class to the root div */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/account" element={<Account />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/itemshop" element={<ItemShop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/exhaust" element={<Exhaust />} />
          <Route path="/exhaust-systems" element={<ExhaustSystems />} />
          <Route path="/styling" element={<Styling />} />
          <Route path="/forced-induction" element={<ForcedInduction />} />
          <Route path="/suspension" element={<Suspension />} />
          <Route path="/fueling" element={<Fueling />} />
          <Route path="/Wheels" element={<Wheels />} />
          <Route path="/engine" element={<Engine />} />
          <Route path="/brakes" element={<Brakes />} />
          <Route path="/intake" element={<Intake />} />
          <Route path="/precision-turbo" element={<Precision />} />
          <Route path="/te37" element={<Te37 />} />
          <Route path="/bc-coils" element={<BCCoils />} />
          <Route path="/vland-headlights" element={<VLAND />} />
          <Route path="/ets-intercooler" element={<ETSIntercooler />} />
          <Route path="/ets-intake" element={<ETSIntake />} />
          <Route path="/ets-turbo-kit" element={<ETSTurboKit />} />
          <Route path="/fuel-injectors" element={<FuelInjectors />} />
          <Route path="/manifolds-headers" element={<ManifoldsHeaders />} />
          <Route path="/sheepey-manifold" element={<SheepeyManifold />} />
          <Route path="/downpipes" element={<Downpipes />} />
          <Route path="/ets-downpipe" element={<ETSDownpipe />} />
          <Route path="/o2-housings" element={<O2Housings />} />
          <Route path="/tomei-outlet" element={<TomeiOutlet />} />
          {/* Add the route for the 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
