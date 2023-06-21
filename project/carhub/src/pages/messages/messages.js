import Header from '../../components/header'
import Footer from '../../components/footer'
import './Messages.css'; // Assuming the CSS file is named "Header.css"

export default function Messages() {
  return (
    <div className="App">
      <div class="messages-page">
        <Header />
        <div class="messages-container">

          {/* Making Groups on left side */}
          <div class="groups-container">
            <div class="list-group">
              <button type="button" class="user-group-item list-group-item-action">First Group</button>
              <button type="button" class="user-group-item list-group-item-action">Second Group</button>
              <button type="button" class="user-group-item list-group-item-action">Third Group</button>
              <button type="button" class="user-group-item list-group-item-action">Fourth Group</button>
              <button type="button" class="user-group-item list-group-item-action">Fifth Group</button>
              <button type="button" class="user-group-item list-group-item-action">Fifth Group</button>
              <button type="button" class="user-group-item list-group-item-action">Fifth Group</button>
              <button type="button" class="user-group-item list-group-item-action">Fifth Group</button>
            </div>
          </div>

          <div class="headerDivider"></div>

          <div class="dms-container">
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
