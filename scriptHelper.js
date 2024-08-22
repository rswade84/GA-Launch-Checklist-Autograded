// Write your helper functions here!

require('cross-fetch/polyfill');

// NOTE: Updates function updates the mission destination information on the DOM...
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
                   <li>Name: ${name}</li>
                   <li>Diameter: ${diameter}</li>
                   <li>Star: ${star}</li>
                   <li>Distance from Earth: ${distance} </li>
                   <li>Number of Moons: ${moons}</li>
               </ol>
               <img src="${imageUrl}">
               `;
}

// NOTE: Validates the users inputs...
function validateInput(testInput) {
  if (testInput === '') {
    return 'Empty';
  }
  if (isNaN(testInput)) {
    return 'Not a Number';
  }
  return 'Is a Number';
}

// NOTE: Validates the form inputs, updates the status mission on the DOM...
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotStatus = document.getElementById('pilotStatus');
  let copilotStatus = document.getElementById('copilotStatus');
  let fuelStatus = document.getElementById('fuelStatus');
  let cargoStatus = document.getElementById('cargoStatus');
  let launchStatus = document.getElementById('launchStatus');

  list.style.visibility = 'visible';

  // Update pilot/copilot status
  pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
  copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
  launchStatus.style.color = 'green';
  launchStatus.innerHTML = 'Shuttle is Ready for Launch';

  // Update fuel/cargo status
  if (fuelLevel < 10000) {
    launchStatus.style.color = 'red';
    launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
    fuelStatus.innerHTML = 'Fuel level too low for launch';
  } else {
    fuelStatus.innerHTML = 'Fuel level high enough for launch';
  }

  // Update cargo status
  if (cargoLevel > 10000) {
    //list.style.visibility = 'visible';
    launchStatus.style.color = 'red';
    launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
    cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
  } else {
    cargoStatus.innerHTML = 'Cargo mass low enough for launch';
  }
}

// NOTE: This function fetches and returns planet data from an API...
async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    'https://handlers.education.launchcode.org/static/planets.json',
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

// NOTE: pickPlanet selects a random planet from the myFetch() planets array...

function pickPlanet(planets) {
  return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
