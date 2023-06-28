import Header from '../components/header'
import Footer from '../components/footer'

export default function Contact() {
  return (
    <div className="App">
      <Header />
      <h2>Contact Page</h2>
      <br/>
      <div className="row">
        <div className= "col"></div>
        <div className="col align-self-center">
          <form>
            <div className="form-group">
              <label htmlFor="senderName">Please enter your name:</label>
              <input type="text" className="form-control" id="senderName" placeholder="Name"></input>
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="userEmail">Please enter your email address:</label>
              <input type="email" className="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with the NSA.</small>
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="message">Please enter your message:</label>
              <textarea className="form-control" id="message" rows="4"></textarea>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col"></div>
      </div>
      <Footer />
    </div>
  );
}
