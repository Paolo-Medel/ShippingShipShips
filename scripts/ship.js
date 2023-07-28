import { getShippingShips, getHaulers } from "./database.js";

export const ShipList = () => {
  const ships = getShippingShips();

  let shipHTML = "<ul>";

  for (const ship of ships) {
    shipHTML += `<li data-type="ship" data-hauler="${ship.haulerId}">${ship.name}</li>`;
  }

  shipHTML += "</ul>";

  return shipHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "ship") {
    const metaHaulerId = itemClicked.dataset.hauler;
    let haulingShip = {};
    const haulersArray = getHaulers();

    for (const hauler of haulersArray) {
      if (parseInt(metaHaulerId) === hauler.id) {
        haulingShip = hauler;
      }
    }
    window.alert(`This ship is being hauled by ${haulingShip.name}`);
  }
});
