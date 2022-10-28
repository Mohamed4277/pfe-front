const initAdress=[
  {
    id:1,
    streetNumber: "12",
    adressPartOne: "4 rue Nelson",
    adressPartTwo: "Batiment A",
    zip: 75004,
    city: "Paris",
    isInvoiceAdress: false,
  },
  {
    id: 2,
    streetNumber: "1",
    adressPartOne: "5 rue George",
    adressPartTwo: "Batiment B",
    zip: 65004,
    city: "Ville",
    isInvoiceAdress: true,
  },
  {
    i:3,
    streetNumber: "3",
    adressPartOne: "15 rue George",
    adressPartTwo: "Batiment C",
    zip: 45004,
    city: "Ville G",
    isInvoiceAdress: false,
  },
  {
    id: 4,
    streetNumber: "4",
    adressPartOne: "15 rue Lion",
    adressPartTwo: "Batiment D",
    zip: 25004,
    city: "Ville GH",
    isInvoiceAdress: false,
  },
]


const adress = (adress =initAdress  , action) => {

  switch (action.type)
        {case "GET_ADRESSES":
            return adress
        }
  return adress;

  }
export default adress;
