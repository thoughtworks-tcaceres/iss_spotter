// iss_promised.js
const request = require("request-promise-native");

/*
 * Requests user's ip address from https://www.ipify.org/
 * Input: None
 * Returns: Promise of request for ip data, returned as JSON string
 */
const fetchMyIP = function() {
  return request("https://api.ipify.org?format=json");
};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://ipvigilante.com/json/${ip}`);
};

const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body).data;
  const url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
  return request(url);
};

// const nextISSTimesForMyLocation = function() {
// 	return fetchMyIP()
// 		.then(fetchCoordsByIP)
// 		.then(fetchISSFlyOverTimes)
// 		.then(data => {
// 			const { response } = JSON.parse(data);
// 			return response;
// 		});
// };

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(ip => fetchCoordsByIP(ip))
    .then(coords => fetchISSFlyOverTimes(coords))
    .then(data => {
      const { response } = JSON.parse(data);
      return response;
    });
};

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

module.exports = { nextISSTimesForMyLocation, printPassTimes };
