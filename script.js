// Write your JavaScript code here!

// NOTE: Event listener that executes when the page is loaded...
window.addEventListener('load', function () {
  let form = document.getElementById('launchForm');
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // NOTE: Collect form data from user inputs...
    let list = document.getElementById('faultyItems');
    let pilotName = document.querySelector('input[name=pilotName]').value;
    let copilotName = document.querySelector('input[name=copilotName]').value;
    let fuelLevel = document.querySelector('input[name=fuelLevel]').value;
    let cargoMass = document.querySelector('input[name=cargoMass]').value;

    /* NOTE: Added form validation from scriptHelper,
            store any errors in an array... */
    let errors = [];

    if (
      validateInput(pilotName) === 'Is a Number' ||
      validateInput(pilotName) === 'Empty'
    ) {
      errors.push('Please enter a valid pilot name!');
    }

    if (
      validateInput(copilotName) === 'Is a Number' ||
      validateInput(copilotName) === 'Empty'
    ) {
      errors.push('Please enter a valid copilot name!');
    }

    if (validateInput(fuelLevel) !== 'Is a Number') {
      errors.push('Please enter a valid fuel level!');
    }

    if (validateInput(cargoMass) !== 'Is a Number') {
      errors.push('Please enter a valid cargo mass!');
    }

    // NOTE: If either field is blank, add an error to the error array...
    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }

    /* NOTE: Call the formSubmission helper, and pass the collected
    data from the form to update DOM... */
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

  // NOTE: Calls the myFetch() funciton in scriptHelper.js to get list of planets...

  let listedPlanetsResponse = myFetch();

  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
    })
    .then(function () {
      /* Below this comment call the appropriate helper functions to pick a planet
      fom the list of planets and add that information to your destination... */

      // NOTE: Calls the pickPlanet() function in scriptHelper.js to pick a planet to random planet...
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
