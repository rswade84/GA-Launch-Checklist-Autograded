// Write your JavaScript code here!

window.addEventListener('load', function () {
  let form = document.getElementById('launchForm');
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // TODO: Get data from form and store it in variables

    let list = document.getElementById('faultyItems');
    let pilotName = document.querySelector('input[name=pilotName]').value;
    let copilotName = document.querySelector('input[name=copilotName]').value;
    let fuelLevel = document.querySelector('input[name=fuelLevel]').value;
    let cargoMass = document.querySelector('input[name=cargoMass]').value;

    // let list = document.getElementById('faultyItems'); // Grabs the ID of the list
    // let pilotName = document.getElementById('pilotName').value; // Uses an ID to get the value
    // let copilotName = document.getElementByName('copilotName').value; // Uses a name attribute to get the value
    // let fuelLevel = document.getElementByName('fuelLevel').value; // Uses a name attribute to get the value
    // let cargoMass = document.getElementByName('cargoMass').value; // Uses a name attribute to get the value

    // TODO: Add form validation for each field

    // Store my errors in an array
    let error = [];

    if (
      validateInput(pilotName) === 'Is a Number' ||
      validateInput(pilotName) === 'Empty'
    ) {
      error.push('Please enter a valid pilot name!');
    }

    if (
      validateInput(copilotName) === 'Is a Number' ||
      validateInput(copilotName) === 'Empty'
    ) {
      error.push('Please enter a valid copilot name!');
    }

    if (validateInput(fuelLevel) !== 'Is a Number') {
      error.push('Please enter a valid fuel level!');
    }

    if (validateInput(cargoMass) !== 'Is a Number') {
      error.push('Please enter a valid cargo mass!');
    }

    // TODO: If either field is blank, add an error to the error array
    if (error.length > 0) {
      alert(error.join('\n'));
      return;
    }

    // TODO: Call formSubmission within submit listener

    formSubmission(
      document,
      list,
      pilotName,
      copilotName,
      fuelLevel,
      cargoMass,
    );
  });

  let listedPlanets;

  // Set listedPlanetsResponse equal to the value returned by calling myFetch()

  let listedPlanetsResponse = myFetch();

  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
    })
    .then(function () {
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

      let planet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        planet.name,
        planet.diameter,
        planet.star,
        planet.distance,
        planet.moons,
        planet.image,
      );
    });
});
