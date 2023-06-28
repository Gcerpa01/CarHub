import Header from '../../components/header'
import Footer from '../../components/footer'
import './Messages.css'; // Assuming the CSS file is named "Header.css"
import React, { useState, useEffect } from 'react';

export default function Messages() {

  const [selectedOption, setSelectedOption] = useState(localStorage.getItem('selectedOption'));

  const [groupsData,setGroupsData] = useState([])


  useEffect(() => {  
        // Fetch data from the API endpoint
        fetch('http://127.0.0.1:8000/groups.json')
            .then(response => response.json())
            .then(data => {
              const filteredGroups = data.groups.filter(group => group.joined === true);
              setGroupsData(filteredGroups)
            })
            .catch(error => {
                console.error('Error fetching group data:', error);
            });
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    localStorage.setItem('selectedOption', option);
  };

  const renderOptionContent = () => {
    switch (selectedOption) {
      case 'Ford':
        return (
          <div className="message-logs-container">
            <div className="list-group">
              <li className="message-group-item" > <div className="User"> User 1: </div> Cras justo odio testing the amount of lines that will</li>
              <li className="message-group-item"> <div className="User"> User 1: </div> Dapibus ac facilisis in</li>
              <li className="message-group-item">  <div className="Main-User"> User 2: </div> Morbi leo risus</li>
              <li className="message-group-item">  <div className="Main-User"> User 2: </div> Porta ac consectetur ac</li>
              <li className="message-group-item"> <div className="User"> User 1: </div>Vestibulum at eros</li>
              <li className="message-group-item">  <div className="Main-User"> User 2: </div> Vestibulum at eros</li>
              <li className="message-group-item"> <div className="User"> User 1: </div>Vestibulum at eros</li>
            </div>
          </div>
        );
      case 'Kia':
        return (
          <div className="message-logs-container">
            <div className="list-group">
              <li className="message-group-item" > <div className="User"> User 1: </div> Cras justo odio testing the amount of lines that will</li>
              <li className="message-group-item"> <div className="User"> User 1: </div> Dapibus ac facilisis in</li>
              <li className="message-group-item">  <div className="Main-User"> User 2: </div> Morbi leo risus</li>
            </div>
          </div>
        );
      case 'Tesla':
        return (
          <div className="message-logs-container">
            <div className="list-group">
              <li className="message-group-item" > <div className="User"> User 1: </div> Cras justo odio testing the amount of lines that will</li>
            </div>
          </div>
        );
      default:
        return (
          <div className="message-logs-container">
            <div className="list-group">
              <li className="message-group-item" > <div className="User"> User 1: </div> Cras justo odio testing the amount of lines that will</li>
              <li className="message-group-item"> <div className="User"> User 1: </div> Dapibus ac facilisis in</li>
              <li className="message-group-item">  <div className="Main-User"> User 2: </div> Morbi leo risus</li>
              <li className="message-group-item">  <div className="Main-User"> User 2: </div> Porta ac consectetur ac</li>
              <li className="message-group-item"> <div className="User"> User 1: </div>Vestibulum at eros</li>
              <li className="message-group-item">  <div className="Main-User"> User 2: </div> Vestibulum at eros</li>
              <li className="message-group-item"> <div className="User"> User 1: </div>Vestibulum at eros</li>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="App">
      <div className="messages-page">
        <Header />
        <div className="messages-container">

          {/* Making Groups on left side */}
          <div className="groups-container">

            {groupsData.map((group, index) => (
              <button
                key={index}
                className={selectedOption === group.name ? 'active' : ''}
                onClick={() => handleOptionClick(group.name)}
              >
                {group.name}
              </button>
            ))}


          </div>

          <div className="headerDivider"></div>

          <div className="dms-container">
            {renderOptionContent()}
            <form>
              <div>
                <input type="text" id="message_typed" className="form-control" placeholder="Type your message:" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
