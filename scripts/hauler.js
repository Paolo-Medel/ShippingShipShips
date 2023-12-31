import { getHaulers, getShippingShips } from "./database.js";

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  // Was a hauler list item clicked?
  if (itemClicked.dataset.type === "hauler") {
    const haulerId = itemClicked.dataset.haulerid;
    let shipCounter = 0;

    const ships = getShippingShips();
    for (const ship of ships) {
      if (parseInt(haulerId) === ship.haulerId) {
        shipCounter++;
      }
    }
    window.alert(`This ship is carrying ${shipCounter} ships`);
  }
});

export const HaulerList = () => {
  const haulers = getHaulers();
  haulers.sort(function (a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  let haulerString = `<ul>`;

  for (const hauler of haulers) {
    haulerString += `<li data-type="hauler" data-haulerId="${hauler.id}">${hauler.name}</li>`;
  }

  haulerString += `</ul>`;

  return haulerString;
};
