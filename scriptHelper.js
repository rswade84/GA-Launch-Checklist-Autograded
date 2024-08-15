// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl,
) {
  // Here is the HTML formatting for our mission target div.
  /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
  if (testInput === '' || testInput === null || testInput === undefined) {
    return 'Empty';
  }

  if (isNan(testInput)) {
    return 'Not a Number';
  }

  if (!isNan(testInput)) {
    return 'Is a Number';
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let list = document.getElementById('faultyItems');
  let pilot = document.getElementById('pilotStatus');
  let copilot = document.getElementById('copilotStatus');
  let fuelLevel = document.getElementById('fuelStatus');
  let cargoLevel = document.getElementById('cargoStatus');
  let launchStatus = document.getElementById('launchStatus');

  if (fuelLevel < 10000 || cargoLevel > 10000) {
    launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
    launchStatus.style.color = 'red';
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
