/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

const RestApi = () => {
    useEffect(() => {
        // Fetch data from the Fruityvice API
        fetch('https://www.fruityvice.com/api/fruit/all')
            .then(res => res.json())
            .then(data => {
                // Log the fetched data to the console
                console.log(data);
            })
            .catch(error => {
                // Handle any errors that occur during the fetch
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array to run the effect only once when the component mounts

    return (
        <div>
            {/* You can add rendering logic here if needed */}
        </div>
    );
};

export default RestApi;
