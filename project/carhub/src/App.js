import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Groups from './pages/groups'
import Home from './pages/home'
import Account from './pages/account'
import Messages from './pages/messages'
import ItemShop from './pages/itemshop'
import Shop from './pages/shop'


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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;