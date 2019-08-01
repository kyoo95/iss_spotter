const request = require('request');

const nextISSTimesForMyLocation = function(callback) {

}

const fetchMyIP = function(callback) {
  const url = `https://api.ipify.org?format=json`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      callback(null, JSON.parse(body));
      return;
    }
  });
};

const fetchCoordsByIP = function(ip, callback) {
  const url2 = `https://ipvigilante.com/${ip}`;
  request(url2, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates. Response: ${body}`;
      callback(Error(msg), null);
    } else {
      const { latitude, longitude } = JSON.parse(body).data;
      callback(null, {latitude, longitude});
    }
  });
};

const fetchISSFlyOverTimes = function(coords, callback) {
  const url3 = `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`
  request(url3, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching ISS pass times. Response: ${body}`;
      callback(Error(msg), null);
    } else {
      const pass = JSON.parse(body).response;
      callback(null, pass);
    }
  });
};

// http://api.open-notify.org/iss-pass.json?lat=LAT&lon=LON
// https://ipvigilante.com/66.207.199.230/latitude
// https://ipvigilante.com/66.207.199.230/longitude

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation };
