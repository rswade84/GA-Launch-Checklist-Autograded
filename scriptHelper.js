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

  let missionTarget = document.getElementById('missionTarget');
  missionTarget.innerHTML = `
               <h2>Mission Destination</h2>
               <ol>
                   <li>Name: </li>
                   <li>Diameter: </li>
                   <li>Star: ${star}</li>
                   <li>Distance from Earth: </li>
                   <li>Number of Moons: </li>
               </ol>
               <img src="">`;
}

/* NOTE: This function checks whether a given input is empty, a number,
or not a number, which is crucial for validating the form fields before submission.*/

function validateInput(testInput) {
  if (testInput === '') {
    return 'Empty';
  }
  if (isNaN(testInput)) {
    return 'Not a Number';
  }
  return 'Is a Number';
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

  list.style.visibility = 'hidden'; // hidden by default

  // Update pilot/copilot status
  pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
  copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
  launchStatus.style.color = 'green';
  launchStatus.innerHTML = 'Shuttle is Ready for Launch';

  // Update fuel/cargo status
  if (validateInput(fuelLevel) < 10000) {
    list.style.visibility = 'visible';
    launchStatus.style.color = 'red';
    launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
    fuelStatus.innerHTML = 'Fuel level too low for launch';
  } else {
    fuelStatus.innerHTML = 'Fuel level high enough for launch';
  }

  // Update cargo status
  if (validateInput(cargoLevel) > 10000) {
    list.style.visibility = 'visible';
    launchStatus.style.color = 'red';
    launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
    cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
  } else {
    cargoStatus.innerHTML = 'Cargo mass low enough for launch';
  }
}

/* NOTE: This function fetches data from an external API. It selects random planets. */

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    'https://handlers.education.launchcode.org/static/planets.json',
  ).then(function (response) {
    return response.json;
  });

  return planetsReturned;
}

/*`pickPlanet` should return an object containing the name, diameter, and
number of moons of the planet. */

function pickPlanet(planets) {
  return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
