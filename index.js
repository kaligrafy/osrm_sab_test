import fetch from 'node-fetch';

const run = async function () {

    const coordinates = {
        origin: [-73.955943, 45.404830],
        destination: [-73.949752, 45.403870]
    };

    const query = `http://localhost:5000/route/v1/walking/${coordinates.origin[0]},${coordinates.origin[1]};${coordinates.destination[0]},${coordinates.destination[1]}?steps=true`;

    const response = await fetch(query, {
        method: 'POST'
    });
    const jsonResponse = await response.json();

    console.log({ 
        distanceMeters: jsonResponse.routes[0].distance,
        durationMinutes: Math.round(jsonResponse.routes[0].duration / 60.0),
    });

};

run().then(function () {
    process.exit();
});