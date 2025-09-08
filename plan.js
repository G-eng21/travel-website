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

const choices = [];

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

let index = 0;

for (const destination of destinations) {
  destinationList[index].value = destination.location;
  territoryList[index].textContent = destination.territory;
  exploreList[index].textContent = destination.photo;
  index++;
}

document.addEventListener("keyup", (event) => {
  const keyName = event.key;

  if (keyName === "Enter") {
    console.log(event.target.value);
    choices.push(event.target.value);
    for (const item of destinationList) {
      if (item.value === event.target.value) {
        item.classList.add("hidden");
      }
    }
  }
});
