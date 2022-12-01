type addressType = {
  house: string;
  road: string;
  zipcode: string;
  cityState: string;
  id: number;
};

export const addresses: Array<addressType> = [
  {
    house: "2235 California Street  APT#021",
    cityState: "Mountain View California",
    zipcode: "11023",
    road: "street",
    id: 1,
  },
  {
    house: "House.no: 3-2-3, Bigbazaar",
    cityState: "Medak Telangana",
    zipcode: "502110",
    road: "street",
    id: 2,
  },
  {
    house: "Flat.no: 402, NGO's colony",
    cityState: "Kamareddy Telangana",
    zipcode: "502010",
    road: "street",
    id: 3,
  },
];
