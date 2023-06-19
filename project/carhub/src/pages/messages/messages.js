import Header from '../../components/header'
import Footer from '../../components/footer'
import './Messages.css'; // Assuming the CSS file is named "Header.css"

export default function Messages() {
  return (
    <div className="App">
      <Header />
      <div class="container mt-5">
        <div class="message-container ">
          <div class="groups-list">
            <h3> Groups </h3>

            <div class="list-group">
              <button type="button" class="list-group-item list-group-item-action">First User
              </button>
              <button type="button" class="list-group-item list-group-item-action">Second User</button>
              <button type="button" class="list-group-item list-group-item-action">Third User</button>
              <button type="button" class="list-group-item list-group-item-action">Fourth User</button>
              <button type="button" class="list-group-item list-group-item-action">Fifth User</button>
              <button type="button" class="list-group-item list-group-item-action">Sixth User</button>
              <button type="button" class="list-group-item list-group-item-action">Seventh User</button>
              <button type="button" class="list-group-item list-group-item-action">Eigth User</button>
              <button type="button" class="list-group-item list-group-item-action">Ninth User</button>
            </div>
          </div>


        </div>
      </div>
      <Footer />
    </div>
  );
}
