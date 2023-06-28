import Header from '../../components/header'
import Footer from '../../components/footer'
import './Messages.css'; // Assuming the CSS file is named "Header.css"
import React, { useState, useEffect } from 'react';

export default function Messages() {

  const [selectedOption, setSelectedOption] = useState(localStorage.getItem('selectedOption'));

  const [groupsData, setGroupsData] = useState([])

  // const [messagesData,setMessagesData] = useState([])

  const [filteredMessages, setFilteredMessages] = useState([])

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


  useEffect(() => {
    const fetchMessages = () => {
      if (selectedOption) {
        fetch('http://127.0.0.1:8000/messages.json')
          .then(response => response.json())
          .then(data => {
            const groupMessages = data.messages.filter(message => selectedOption === message.group);
            const sortedGroupMessages = groupMessages.sort((a, b) => {
              return new Date(a.timestamp) - new Date(b.timestamp);
            });
            setFilteredMessages(sortedGroupMessages);
          })
          .catch(error => {
            console.error('Error fetching group data:', error);
          });
      }
    };

    // Fetch messages initially
    fetchMessages();

    // Fetch messages every 5 seconds
    const interval = setInterval(fetchMessages, 5000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [selectedOption]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    localStorage.setItem('selectedOption', option);
  };


  const renderOptionContent = () => {
    return (
      <div className="message-logs-container">
        <div className="list-group">
          {filteredMessages.map((message, index) => (
            <li className="message-group-item" key={index}>
              <div className={message.name == 'Current User' ? 'Main-User' : 'User'}>
                {message.name}:
              </div> {message.message}
            </li>
          ))}
        </div>
      </div>
    );
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
