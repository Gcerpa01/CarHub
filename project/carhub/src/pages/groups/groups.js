import Header from '../../components/header'
import Footer from '../../components/footer'
import './Groups.css'; // Assuming the CSS file is named "Header.css"


export default function Groups() {
    return (
        <div>
            <Header />

            <form>
                <div>
                    <input type="text" id="group_search" class="form-control" placeholder="Search for group" />
                </div>
            </form>

            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src="https://www.shutterstock.com/image-photo/motorbike-on-road-riding-having-260nw-1838812744.jpg" class="rounded float-left w-50" />
                        <div class="carousel-container">
                            <div class="carousel-caption">
                                <h2 class="d-flex h-25 align-items-center justify-content-center">Motorcycle Hobbiests</h2>
                                <p class="d-flex h-50 align-items-center justify-content-center">This contains the information regarding the current club</p>
                                <p><a class="btn btn-sm btn-primary align-items-center" href="#">Join Group</a> </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://www.shutterstock.com/image-photo/motorbike-on-road-riding-having-260nw-1838812744.jpg" class="d-block w-50" alt="slide1" />
                        <div class="container">
                            <div class="carousel-caption">
                                <h1>Motorcycle Hobbiests2</h1>
                                <p> This contains the information regarding the current club</p>
                                <p><a class="btn btn-large btn-primary" href="#">Join Group</a> </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.shutterstock.com/image-photo/motorbike-on-road-riding-having-260nw-1838812744.jpg" class="d-block w-50" alt="slide1" />
                        <div class="container">
                            <div class="carousel-caption">
                                <h1>Motorcycle Hobbiests3</h1>
                                <p> This contains the information regarding the current club</p>
                                <p><a class="btn btn-large btn-primary" href="#">Join Group</a> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <Footer />
        </div>
    )
}
