import { useState } from 'react';
import Header from '../../components/header'
import Footer from '../../components/footer'
import Send from './components/Send'
import './contact.css'
import Dropdown from './components/Dropdown';

export default function Contact() {

  const [dropdownItems, setDropdownItems] = useState([
    {
      id: 1,
      name: "Anthony",
      email: "avasquez@carhub.com",
    },
    {
      id: 2,
      name: "Gerardo",
      email: "gcerpa@carhub.com",
    },
    {
      id: 3,
      name: "Jacob",
      email: "jhosburg@carhub.com",
    },
    {
      id: 4,
      name: "Jarrod",
      email: "jrowson@carhub.com",
    },
    {
      id: 5,
      name: "Leo",
      email: "lroacho@carhub.com",
    },
  ])

  const [dropdownTitle, setTitle] = useState([''])

  const setDropdownTitle = (id) => {
    setTitle(dropdownTitle.filter((dropdownItems) => dropdownItems.id == id))
  }

  return (
    <div className="App">
      <Header />
      <h2>Contact Page</h2>
      <br/>
      <div className="row">
        <div className= "col"></div>
        <div className="col">
          <form>
            <div className="form-group">
              <label htmlFor="senderName">Please enter your name:</label>
              <input type="text" className="form-control" id="senderName" placeholder="Name"></input>
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="userEmail">Please enter your email address:</label>
              <input type="email" className="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
              {/* <small id="emailHelp" className="form-text text-muted">We will never share your email with the NSA.</small> */}
            </div>
            <br/>
            <div className='flexbox'>
              <Dropdown 
              dropdownItems={dropdownItems}
              dropdownTitle={dropdownTitle.email}
              setDropdownTitle={setDropdownTitle}/>
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="message">Please enter your message:</label>
              <textarea className="form-control" id="message" rows="8"></textarea>
            </div>
            <br/>
            <div className="flexbox">
              <Send/>
            </div>
          </form>
        </div>
        <div className="col"></div>
      </div>
      <Footer />
    </div>
  );
}
