import Header from '../components/header'
import Footer from '../components/footer'

export default function Contact() {
  return (
    <div className="App">
      <Header />
      <h2>Contact Page</h2>
      <br></br>
      <div class="container">
        <div class= "col"></div>
        <div class="col align-self-center">
          <form>
            <div class="form-group">
              <label for="senderName">Please enter your name:</label>
              <input type="text" class="form-control" id="senderName" placeholder="Name"></input>
            </div>
            <div class="form-group">
              <label for="userEmail">Please enter your email address:</label>
              <input type="email" class="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with the NSA.</small>
            </div>
            <br></br>
            <div class="form-group">
              <label for="message">Please enter your message:</label>
              <textarea class="form-control" id="message" rows="4"></textarea>
            </div>
            <br></br>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          </div>
          <div class="col"></div>
      </div>
      <Footer />
    </div>
  );
}
