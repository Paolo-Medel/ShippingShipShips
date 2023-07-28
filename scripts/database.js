const database = {
  docks: [
    { id: 1, location: "Shanghai, China", volume: "43.5" },
    { id: 2, location: "Busan, South Korea", volume: "21.6" },
    { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
    { id: 4, location: "Antwerp, Belgium", volume: "12.04" },
  ],
  haulers: [
    { id: 1, name: "Pikachu", dockId: 1 },
    { id: 2, name: "Onix", dockId: 1 },
    { id: 3, name: "Lugia", dockId: 3 },
    { id: 4, name: "Mewtwo", dockId: 4 },
    { id: 5, name: "Ho-oh", dockId: 1 },
  ],
  shippingShips: [
    { id: 1, name: "Ship Alpha", haulerId: 1 },
    { id: 2, name: "Ship Beta", haulerId: 2 },
    { id: 3, name: "Ship Gamma", haulerId: 1 },
    { id: 4, name: "Ship Delta", haulerId: 5 },
    { id: 5, name: "Ship Epsilon", haulerId: 5 },
    { id: 6, name: "Ship Zeta", haulerId: 3 },
    { id: 7, name: "Ship Eta", haulerId: 4 },
    { id: 8, name: "Ship Theta", haulerId: 3 },
    { id: 9, name: "Ship Iota", haulerId: 2 },
    { id: 10, name: "Ship Kappa", haulerId: 2 },
  ],
};

export const getDocks = () => {
  return database.docks.map((docks) => ({ ...docks }));
};

export const getHaulers = () => {
  return database.haulers.map((haulers) => ({ ...haulers }));
};

export const getShippingShips = () => {
  return database.shippingShips.map((shippingShips) => ({ ...shippingShips }));
};
