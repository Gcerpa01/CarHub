import Header from '../../components/header'
import Footer from '../../components/footer'
import './Shop.css';

export default function Error() {
  return (
    <><div className="App">
        <Header />
            <div class="alert alert-danger" role="alert">
                ERROR! The webpage you are trying to access has not been found and/or is under construction! Click the button below to return.
                <br></br>
                Best regards - CarHub Team
            </div>
            <div>
                <a href="javascript:history.go(-1)">
                    <button type="button" class="backbutton">
                        Go Back
                    </button>
                </a>
            </div>
        <Footer />
      </div></>
  );
}