import React from 'react';
import TopDestinations from './TopDestinations';

const TopDestinationsContainer = async() => {

    const res = await fetch("http://localhost:5000/destination", { cache: "no-store" });
    const destinations = await res.json();
    
    return (
        <TopDestinations destinations={destinations}/>
    );
};

export default TopDestinationsContainer;