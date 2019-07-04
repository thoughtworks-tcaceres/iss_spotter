// index.js
const { printPassTimes, nextISSTimesForMyLocation } = require("./iss");

// > node index.js
// Next pass at Fri Jun 01 2021 13:01:35 GMT-0700 (Pacific Daylight Time) for 465 seconds!
// Next pass at Fri Jun 01 2021 14:36:08 GMT-0700 (Pacific Daylight Time) for 632 seconds!
// Next pass at Fri Jun 01 2021 16:12:35 GMT-0700 (Pacific Daylight Time) for 648 seconds!
// Next pass at Fri Jun 01 2021 17:49:29 GMT-0700 (Pacific Daylight Time) for 648 seconds!
// Next pass at Fri Jun 01 2021 19:26:12 GMT-0700 (Pacific Daylight Time) for 643 seconds!

// fetchMyIP((error, ip) => {
//   if (error) {
//     return;
//   }
//   console.log(ip);
// });

// fetchCoordsByIP("66.207.199.230", (error, coordinates) => {
//   if (error) {
//     return;
//   }
//   console.log(coordinates);
// });
// const exampleCoords = { latitude: "49.27670", longitude: "-123.13000" };

// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned flyover times:", passTimes);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("we got an error:", error);
    return;
  }
  //print info to screen
  printPassTimes(passTimes);
});
