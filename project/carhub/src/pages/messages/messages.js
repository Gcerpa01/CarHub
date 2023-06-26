import Header from '../../components/header'
import Footer from '../../components/footer'
import './Messages.css'; // Assuming the CSS file is named "Header.css"
import React, { useState, useEffect } from 'react';
import groupsData from '../../db/subscribed_groups.json';

export default function Messages() {
  const [selectedOption, setSelectedOption] = useState('group 1');


  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderOptionContent = () => {
    switch (selectedOption) {
      case 'Ford':
        return (
          <div class="message-logs-container">
            <div class="list-group">
              <li class="message-group-item" > <text class="User"> User 1: </text> Cras justo odio testing the amount of lines that will</li>
              <li class="message-group-item"> <text class="User"> User 1: </text> Dapibus ac facilisis in</li>
              <li class="message-group-item">  <text class="Main-User"> User 2: </text> Morbi leo risus</li>
              <li class="message-group-item">  <text class="Main-User"> User 2: </text> Porta ac consectetur ac</li>
              <li class="message-group-item"> <text class="User"> User 1: </text>Vestibulum at eros</li>
              <li class="message-group-item">  <text class="Main-User"> User 2: </text> Vestibulum at eros</li>
              <li class="message-group-item"> <text class="User"> User 1: </text>Vestibulum at eros</li>
            </div>
          </div>
        );
      case 'Kia':
        return (
          <div class="message-logs-container">
            <div class="list-group">
              <li class="message-group-item" > <text class="User"> User 1: </text> Cras justo odio testing the amount of lines that will</li>
              <li class="message-group-item"> <text class="User"> User 1: </text> Dapibus ac facilisis in</li>
              <li class="message-group-item">  <text class="Main-User"> User 2: </text> Morbi leo risus</li>
            </div>
          </div>
        );
      case 'Tesla':
        return (
          <div class="message-logs-container">
            <div class="list-group">
              <li class="message-group-item" > <text class="User"> User 1: </text> Cras justo odio testing the amount of lines that will</li>
            </div>
          </div>
        );
      default:
        return (
          <div class="message-logs-container">
            <div class="list-group">
              <li class="message-group-item" > <text class="User"> User 1: </text> Cras justo odio testing the amount of lines that will</li>
              <li class="message-group-item"> <text class="User"> User 1: </text> Dapibus ac facilisis in</li>
              <li class="message-group-item">  <text class="Main-User"> User 2: </text> Morbi leo risus</li>
              <li class="message-group-item">  <text class="Main-User"> User 2: </text> Porta ac consectetur ac</li>
              <li class="message-group-item"> <text class="User"> User 1: </text>Vestibulum at eros</li>
              <li class="message-group-item">  <text class="Main-User"> User 2: </text> Vestibulum at eros</li>
              <li class="message-group-item"> <text class="User"> User 1: </text>Vestibulum at eros</li>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="App">
      <div class="messages-page">
        <Header />
        <div class="messages-container">

          {/* Making Groups on left side */}
          <div class="groups-container">

            {groupsData.groups.map((group, index) => (
              <button
                key={index}
                className={selectedOption === group.name ? 'active' : ''}
                onClick={() => handleOptionClick(group.name)}
              >
                {group.name}
              </button>
            ))}


          </div>

          <div class="headerDivider"></div>

          <div class="dms-container">
            {renderOptionContent()}
            <form>
              <div>
                <input type="text" id="message_typed" class="form-control" placeholder="Type your message:" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
