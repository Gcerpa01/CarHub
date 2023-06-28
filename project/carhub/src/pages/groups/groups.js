import Header from '../../components/header';
import Footer from '../../components/footer';
import Carousel from 'bootstrap/js/dist/carousel';
import './Groups.css';
import { useState, useEffect } from 'react';

export default function Groups() {
    const [searchValue, setSearchValue] = useState('');
    const [filteredGroups, setFilteredGroups] = useState([]);
    const [groupData, setGroupData] = useState([]);

    const showSearchContainer = searchValue !== '';

    useEffect(() => {
        // Fetch data from the API endpoint
        fetch('http://127.0.0.1:8000/groups.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setGroupData(data.groups);
                setFilteredGroups(data.groups);
            })
            .catch(error => {
                console.error('Error fetching group data:', error);
            });
    }, []);

    useEffect(() => {
        // Initialize the carousel after the component has mounted
        var carousel = new Carousel(document.getElementById('carousel-Groups'), {
            interval: 5000,
        });
    }, []);

    const userSearch = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        const filtered = groupData.filter((group) =>
            group.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredGroups(filtered);
    };

    const joinGroup = (group) => {
        const index = groupData.findIndex((item) => item.name === group.name);
        if (index !== -1) {
            const updatedGroupData = [...groupData];
            updatedGroupData[index].joined = true;
            setGroupData(updatedGroupData);
            setFilteredGroups([updatedGroupData[index]]);
            userSearch({ target: { value: searchValue } });

            // Update the group's 'joined' property on the backend
            const groupId = group.id; // Assuming the group object has an 'id' property
            fetch(`http://127.0.0.1:8000/groups/${groupId}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ joined: true }),
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
        }
    };


    return (
        <>
            <Header />

            <div className="search-box">
                <form>
                    <div>
                        <input
                            type="text"
                            id="group_search"
                            className="form-control"
                            placeholder="Search for group"
                            onChange={userSearch}
                            autoComplete="off"
                        />
                    </div>
                </form>

                {showSearchContainer && (
                    <div className="search-container" style={{ visibility: 'visible' }}>
                        {filteredGroups.map((group, index) => (
                            <div className="search-result-container" key={index}>
                                <div className="search-result">
                                    <text className="group-name">{group.name}</text>
                                    <text className="group-members">Members: {group.members}</text>

                                    {group.joined ? (
                                        <button className="join-button inactive">Joined</button>
                                    ) : (
                                        <button className="join-button" onClick={() => joinGroup(group)}>
                                            Join
                                        </button>
                                    )}
                                </div>
                                <div className="rowDivider"></div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div id="carousel-Groups" className="carousel" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {groupData && groupData.slice(0, 3).map((group, index) => (
                        <button
                            type="button"
                            data-bs-target="#carousel-Groups"
                            data-bs-slide-to={index}
                            className={index === 0 ? 'active' : ''}
                            aria-current={index === 0 ? 'true' : 'false'}
                            aria-label={`Slide ${index + 1}`}
                            key={index}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {groupData && groupData.slice(0, 3).map((group, index) => (
                        <div
                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                            key={index}
                        >
                            <img src={group.image} className="group-image" alt="Group" />
                            <div className="custom-caption">
                                <h2 className="carousel-group-name">{group.name}</h2>
                                <h3 className="carousel-group-members">
                                    members: {group.members}
                                </h3>
                                <div className="carousel-description">
                                    <p>{group.description}</p>
                                </div>
                                <p>
                                    {group.joined ? (
                                        <a className="btn btn-sm btn-primary align-items-center disabled" href="#">
                                            Joined Group
                                        </a>
                                    ) : (
                                        <a className="btn btn-sm btn-primary align-items-center" href="#" onClick={() => joinGroup(group)}>
                                            Join Group
                                        </a>
                                    )}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-Groups"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-Groups"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <Footer />
        </>
    );
}
