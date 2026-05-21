import React from 'react';
import TopDestinations from './TopDestinations';

const TopDestinationsContainer = async() => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`, { cache: "no-store" });
    const destinations = await res.json();
    
    return (
        <TopDestinations destinations={destinations}/>
    );
};

export default TopDestinationsContainer;