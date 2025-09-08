const destinations = [
  { location: "Perth", photo: "explorelink", territory: "Western" },
  { location: "Broome", photo: "explorelink", territory: "Western" },
  { location: "Darwin", photo: "explorelink", territory: "Central" },
  { location: "Alice Springs", photo: "explorelink", territory: "Central" },
  { location: "Adelaide", photo: "explorelink", territory: "Central" },
  { location: "Melbourne", photo: "explorelink", territory: "Eastern" },
  { location: "Canberra", photo: "explorelink", territory: "Eastern" },
  { location: "Sydney", photo: "explorelink", territory: "Eastern" },
  { location: "Brisbane", photo: "explorelink", territory: "Eastern" },
  { location: "Cairns", photo: "explorelink", territory: "Eastern" },
];

const itineraryChoices = [];

const destinationTableInfo = document.getElementsByClassName("plan-table__row");
console.log(destinationTableInfo);

const destinationList = document.getElementsByClassName(
  "plan-table__item--destination"
);
// console.log(destinationList);

const territoryList = document.getElementsByClassName(
  "plan-table__item--territory"
);
// console.log(territoryList);

const exploreList = document.getElementsByClassName(
  "plan-table__item--explore"
);
// console.log(exploreList);

const itineraryList = document.querySelectorAll(".plan-itinerary__item");
// console.log(itineraryList);

const itineraryButton = document.querySelector("#save-itinerary");

let index = 0;

for (const destination of destinations) {
  destinationList[index].value = destination.location;
  territoryList[index].textContent = destination.territory;
  // exploreList[index].textContent = destination.photo;
  index++;
}

itineraryButton.addEventListener("submit", function (event) {
  console.log("submit event in plan.js");
  event.preventDefault();
});

document.addEventListener("keyup", (event) => {
  const keyName = event.key;

  if (keyName === "Enter") {
    // console.log(event.target.value);
    itineraryChoices.push(event.target.value);
    // for (let index2 = 0; index2 <= destinationList.length; index2++) {
    let index2 = 0;
    for (const destination of destinationList) {
      // console.log(destination.value);
      if (destination.value === event.target.value) {
        // console.log(destinationTableInfo[index2]);

        destinationTableInfo[index2].classList.add("hidden");
        break;
      }
      index2++;
    }

    // Loop through to add choices to the itinerary

    let index3 = 0;

    if (itineraryChoices) {
      for (const itinerary of itineraryChoices) {
        itineraryList[index3].textContent = itinerary;
        itineraryList[index3].classList.remove("hidden");
        index3++;
      }
      itineraryButton.removeAttribute("disabled");
    }
  }
});
