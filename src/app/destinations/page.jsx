import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationPage =async () => {
    const res = await fetch("http://localhost:5000/destination");
    const destinations = await res.json();
    // console.log(destinations);
    return (
        <div className='container p-8 mx-auto'>
            <h2 className="text-3xl font-bold text-cyan-600 m-6">Destinations</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination}></DestinationCard>)
                }
            </div>
        </div>
    );
};

export default DestinationPage;