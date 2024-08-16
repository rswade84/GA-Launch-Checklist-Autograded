// Write your JavaScript code here!

window.addEventListener('load', function () {
  let form = document.getElementById('launchForm');

  form.addEventListener('submit', function (event) {
    // TODO: Prevent page from reloading
    event.preventDefault();

    // TODO: Call formSubmission within submit listener

    let list = document.getElementById('faultyItems');
    let pilotName = document.getElementById('pilotName').value;
    let copilotName = document.getElementById('copilotName').value;
    let fuelLevel = document.getElementById('fuelLevel').value;
    let cargoLevel = document.getElementById('cargoLevel').value;

    // TODO: Add form validation for each field

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
  });

  let listedPlanets;

  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse;
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
});
