import { getHaulers } from "./database.js";

export const HaulerList = () => {
  const haulers = getHaulers();

  let haulerString = `<ul>`;

  for (const hauler of haulers) {
    haulerString += `<li>${hauler.name}</li>`;
  }

  haulerString += `</ul>`;

  return haulerString;
};
