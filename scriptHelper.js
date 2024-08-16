// Write your helper functions here!

require('cross-fetch/polyfill');

/* NOTE: This function updates the mission destination information on the webpage by
modifying the DOM with the details of a selected planet.*/

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

/* NOTE: This function checks whether a given input is empty, a number,
or not a number, which is crucial for validating the form fields before submission.*/

function validateInput(testInput) {
  if (testInput === '' || testInput === null || testInput === undefined) {
    return 'Empty';
  }

  if (isNaN(testInput)) {
    return 'Not a Number';
  }

  if (!isNaN(testInput)) {
    return 'Is a Number';
  }
}

/* NOTE: Critical function that handles the validation of form inputs, updates the status
of various mission parameters, and determines if the shuttle is ready for launch based
on the provided inputs. */

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
