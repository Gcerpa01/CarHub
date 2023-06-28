import Header from '../../components/header'
import Footer from '../../components/footer'
import Carousel from 'bootstrap/js/dist/carousel'; // Import the Carousel component from Bootstrap

import './Groups.css'; // Assuming the CSS file is named "Header.css"

import groupData from '../../db/groupData.json';
import { isVisible } from '@testing-library/user-event/dist/utils';
import { useState, useEffect } from 'react'; // Import the useEffect hook


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

    const joinGroup = (group) => {
        // Find the index of the group in the groupData array
        const index = groupData.groups.findIndex((item) => item.name === group.name);

        if (index !== -1) {
            groupData.groups[index].joined = true; // Update the joined property to true
            const joinedGroup = groupData.groups[index]

            setFilteredGroups([joinedGroup]); // rerender
            userSearch({ target: { value: searchValue } });
        }

    };


    return (
        <>
            <Header />

            <div className="search-box">
                <form>
                    <div>
                        <input type="text" id="group_search" className="form-control" placeholder="Search for group" onChange={userSearch} autoComplete="off" />
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


                                    {group.joined ? (<button className="join-button inactive">Joined</button>)
                                        : (<button className="join-button" onClick={() => joinGroup(group)}>Join</button>)
                                    }

                                </div>
                                <div className="rowDivider"></div>
                            </div>
                        ))}
                    </div>
                )}

            </div>

            <div id="carousel-Groups" className="carousel" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carousel-Groups" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carousel-Groups" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carousel-Groups" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    {groupData.groups.slice(0, 3).map((group, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <img src={group.image} className="group-image" alt="Group" />
                            <div className="custom-caption">
                                <h2 className="carousel-group-name">{group.name}</h2>
                                <h3 className="carousel-group-members">members: {group.members}</h3>
                                <div className="carousel-description"> <p>{group.summary}</p> </div>
                                <p>


                                    {group.joined ? <a className="btn btn-sm btn-primary align-items-center disabled" href="#">
                                        Joined Group
                                    </a>
                                        : (<a className="btn btn-sm btn-primary align-items-center" href="#" onClick={() => joinGroup(group)}>
                                            Join Group </a>)
                                    }

                                </p>
                            </div>
                        </div>
                    ))}


                </div>

                <button className="carousel-control-prev " type="button" data-bs-target="#carousel-Groups" data-bs-slide="prev" >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carousel-Groups" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <Footer />
        </>
    )
}
