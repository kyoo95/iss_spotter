// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, } = require('./iss');

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  console.log(passTimes);
});


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned IP:', ip);
// });

// //'https://ipvigilante.com/66.207.199.230'

// fetchCoordsByIP('66.207.199.230', (error, coords) => {
//   if (error) {
//     console.log("No coordinates found!", error);
//     return;
//   }
//   console.log('Passed! Returning Coordinates:', coords);
// });


// const myCoords = { latitude: '43.63830', longitude:'-79.43010' };
// fetchISSFlyOverTimes(myCoords, (error, fly) => {
//   if (error) {
//     console.log("No pass times found!", error);
//     return;
//   }
//   console.log('Fly times:', fly);
// });