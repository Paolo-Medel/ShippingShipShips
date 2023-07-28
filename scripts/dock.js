import { getDocks, getHaulers } from "./database.js";

export const DockList = () => {
  const docks = getDocks();
  docks.sort(function (a, b) {
    var textA = a.location.toUpperCase();
    var textB = b.location.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  let docksHTML = "<ul>";

  for (const dock of docks) {
    docksHTML += `<li data-type="dock" data-id="${dock.id}" data-location="${dock.location}">${dock.location}</li>`;
  }

  docksHTML += "</ul>";

  return docksHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "dock") {
    const dockId = itemClicked.dataset.id;
    const dockLocation = itemClicked.dataset.location;
    const haulers = getHaulers();
    let dockedHaulers = "";

    for (const hauler of haulers) {
      if (parseInt(dockId) === hauler.dockId) {
        dockedHaulers += hauler.name + " ";
      }
    }

    if (dockedHaulers != "") {
      window.alert(
        `The ${dockLocation} dock is currently unloading ${dockedHaulers}`
      );
    } else {
      window.alert(`The ${dockLocation} dock is currently unloading nothing`);
    }
  }
});

// } else {
//     window.alert(`The ${dockLocation} dock is currently unloading nothing`);
//   }

//   if (parseInt(dockId) === hauler.dockId) {
