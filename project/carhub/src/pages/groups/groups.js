import Header from '../../components/header'
import Footer from '../../components/footer'
import Carousel from 'bootstrap/js/dist/carousel'; // Import the Carousel component from Bootstrap

import './Groups.css'; // Assuming the CSS file is named "Header.css"

import groupData from '../../db/groupData.json';
import { isVisible } from '@testing-library/user-event/dist/utils';
import { useState,useEffect } from 'react'; // Import the useEffect hook


export default function Groups() {


    const [searchValue, setSearchValue] = useState('');
    const [filteredGroups, setFilteredGroups] = useState([]);

    const showSearchContainer = searchValue !== '';


    useEffect(() => {
        // Initialize the carousel after the component has mounted
        var carousel = new Carousel(document.getElementById('carousel-Groups'), {
            interval: 5000,
        });
    }, []);

    const userSearch = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        const filtered = groupData.groups.filter((group) => group.name.toLowerCase().includes(value.toLowerCase()));
        setFilteredGroups(filtered);
    };


    return (
        <>
            <Header />

            <div class="search-box">
                <form>
                    <div>
                        <input type="text" id="group_search" class="form-control" placeholder="Search for group"  onChange={userSearch} />
                    </div>
                </form>

                {showSearchContainer && (
                    <div className="search-container" style={{ visibility: 'visible' }}>
                        {/* Generate search results dynamically */}
                        {filteredGroups.map((group, index) => (
                            <div className="search-result-container" key={index}>
                                <div className="search-result">
                                    <text className="group-name">{group.name}</text>
                                    <text className="group-members">Members: {group.members}</text>
                                    <button className="join-button">Join</button>
                                </div>
                                <div className="rowDivider"></div>
                            </div>
                        ))}
                    </div>
                )}

            </div>

            <div id="carousel-Groups" class="carousel" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carousel-Groups" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carousel-Groups" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carousel-Groups" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    {groupData.groups.slice(0, 3).map((group, index) => (
                        <div class={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <img src={group.image} class="group-image" alt="Group" />
                            <div className="custom-caption">
                                <h2 className="carousel-group-name">{group.name}</h2>
                                <h3 className="carousel-group-members">members: {group.members}</h3>
                                <div className="carousel-description"> <p>{group.summary}</p> </div>
                                <p>
                                    <a class="btn btn-sm btn-primary align-items-center" href="#">
                                        Join Group
                                    </a>{' '}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* 
                    <div class="carousel-item active" >
                        <img src="https://www.shutterstock.com/image-photo/motorbike-on-road-riding-having-260nw-1838812744.jpg" class="group-image" />
                        <div className="custom-caption">
                            <h2 className="carousel-group-name">Motorcycle Hobbiests</h2>
                            <h3 className="carousel-group-members"> members: 6</h3>
                            <div className="carousel-description">
                                <p>This contains the test nformation regarding the current club </p>
                            </div>
                            <p><a class="btn btn-sm btn-primary align-items-center" href="#">Join Group</a> </p>
                        </div>
                    </div>


                    <div class="carousel-item " >
                        <img src="https://www.shutterstock.com/image-photo/motorbike-on-road-riding-having-260nw-1838812744.jpg" class="group-image" />
                        <div className="custom-caption">
                            <h2 className="carousel-group-name">Motorcycle Hobbiests</h2>
                            <h3 className="carousel-group-members"> members: 6</h3>
                            <div className="carousel-description">
                                <p>This contains the test nformation regarding the current club </p>
                            </div>
                            <p><a class="btn btn-sm btn-primary align-items-center" href="#">Join Group</a> </p>
                        </div>
                    </div>


                    <div class="carousel-item ">
                        <img src="https://www.shutterstock.com/image-photo/motorbike-on-road-riding-having-260nw-1838812744.jpg" class="group-image" />
                        <div className="custom-caption">
                            <h2 className="carousel-group-name">Motorcycle Hobbiests</h2>
                            <h3 className="carousel-group-members"> members: 6</h3>
                            <div className="carousel-description">
                                <p>This contains the test nformation regarding the current club </p>
                            </div>
                            <p><a class="btn btn-sm btn-primary align-items-center" href="#">Join Group</a> </p>
                        </div>
                    </div> */}


                </div>

                <button class="carousel-control-prev " type="button" data-bs-target="#carousel-Groups" data-bs-slide="prev" >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#carousel-Groups" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


            <Footer />
        </>
    )
}
