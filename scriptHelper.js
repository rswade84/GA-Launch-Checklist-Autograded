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

// Use validateInput() in the formSubmission() function below.

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotStatus = document.getElementById('pilotStatus');
  let copilotStatus = document.getElementById('copilotStatus');
  let fuelStatus = document.getElementById('fuelStatus');
  let cargoStatus = document.getElementById('cargoStatus');
  let launchStatus = document.getElementById('launchStatus');

  if (fuelLevel < 10000 || cargoLevel > 10000) {
    launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
    launchStatus.style.color = 'red';
  }
}

/* NOTE: This function fetches data from an external API. It selects random planets. */

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

/*`pickPlanet` should return an object containing the name, diameter, and
number of moons of the planet. */

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
