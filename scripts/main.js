import { DockList } from "./dock.js";
import { HaulerList } from "./hauler.js";
import { ShipList } from "./ship.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<h1>Shipping Ship Ships</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>List of Docks</h2>
        ${DockList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>List of Haulers</h2>
        ${HaulerList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>List of Ships</h2>
        ${ShipList()}
    </section>
</article>
`;

mainContainer.innerHTML = applicationHTML;
