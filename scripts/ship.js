import { getShippingShips } from "./database.js";

export const ShipList = () => {
  const ships = getShippingShips();

  let shipHTML = "<ul>";

  for (const ship of ships) {
    shipHTML += `<li>${ship.name}</li>`;
  }

  shipHTML += "</ul>";

  return shipHTML;
};
