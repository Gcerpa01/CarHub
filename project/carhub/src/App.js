import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Groups from './pages/groups/groups'
import Home from './pages/home'
import Account from './pages/account/account'
import Messages from './pages/messages/messages'
import ItemShop from './pages/itemshop'
import Shop from './pages/shop'
import Contact from './pages/contact'
import Login from './pages/account/login'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>} />
          <Route path = "/home" element = {<Home />} />
          <Route path = "/groups" element = {<Groups />} />
          <Route path = "/account" element = {<Account />} />
          <Route path = "/messages" element = {<Messages />} />
          <Route path = "/shop" element = {<Shop />} />
          <Route path = "/itemshop" element = {<ItemShop />} />
          <Route path = "/contact" element = {<Contact />} />
          <Route path = "/login" element = {<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
