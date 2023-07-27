const database = {
  docks: [
    { id: 1, location: "Shanghai, China", volume: "43.5" },
    { id: 2, location: "Busan, South Korea", volume: "21.6" },
    { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
    { id: 4, location: "Antwerp, Belgium", volume: "12.04" },
  ],
  haulers: [
    { id: 1, name: "Pikachu" },
    { id: 2, name: "Onix" },
    { id: 3, name: "Lugia" },
    { id: 1, name: "Mewtwo" },
  ],
  shippingShips: [
    { id: 1, name: "Ship Alpha" },
    { id: 2, name: "Ship Beta" },
    { id: 3, name: "Ship Gamma" },
    { id: 4, name: "Ship Delta" },
    { id: 5, name: "Ship Epsilon" },
    { id: 6, name: "Ship Zeta" },
    { id: 7, name: "Ship Eta" },
    { id: 8, name: "Ship Theta" },
    { id: 9, name: "Ship Iota" },
    { id: 10, name: "Ship Kappa" },
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
