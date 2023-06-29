import Header from '../../components/header'
import Footer from '../../components/footer'
import './Messages.css'; // Assuming the CSS file is named "Header.css"
import React, { useState, useEffect, useRef } from 'react';

export default function Messages() {

  const [selectedOption, setSelectedOption] = useState(localStorage.getItem('selectedOption'));

  const [groupsData, setGroupsData] = useState([])

  const [filteredMessages, setFilteredMessages] = useState([])

  const messagesContainerRef = useRef(null);

  useEffect(() => {

    const fetchGroups = () => {
      // Fetch data from the API endpoint
      fetch('http://127.0.0.1:8000/groups.json')
        .then(response => response.json())
        .then(data => {
          const filteredGroups = data.groups.filter(group => group.joined === true); //only filter those the user has subscribed to
          setGroupsData(filteredGroups)
        })
        .catch(error => {
          console.error('Error fetching group data:', error);
        });
    }



    fetchGroups();

    // Fetch groups every 3 seconds
    const interval = setInterval(fetchGroups, 3000);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const fetchMessages = () => { //read messages from server
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

    // Fetch messages every 3 seconds
    const interval = setInterval(fetchMessages, 3000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [selectedOption]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    localStorage.setItem('selectedOption', option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const messageInput = document.getElementById('message_typed');
    const message = messageInput.value;

    fetch('http://127.0.0.1:8000/messages.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: "Current User", message: message, group: selectedOption, timestamp: Date.now() }),
    })
      .then(response => {
        if (response.ok) {
          console.log('Group updated successfully.');
        } else {
          console.error('Failed to update group:', response.status);
        }
      })
      .catch(error => {
        console.error('Error updating group:', error);
      });


    // Handle the submitted message, e.g., send it to the server
    console.log('Submitted message:', message);

    // Clear the input field
    messageInput.value = '';
  };


  // Scroll to bottom with every new update of messages
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [filteredMessages]);

  const renderOptionContent = () => {
    return (
      <div className="message-logs-container" ref={messagesContainerRef}>
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
            <form onSubmit={handleSubmit} autoComplete="off">
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
