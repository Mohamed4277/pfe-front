const data = {
  id: 5,
  name: "John Travolta",
  username: "john",
  password: "$2a$10$zEWqek07SmLtiLWBG8iqeOYY.CXSpLY9xeB774ixeXeO4UsZhf5KO",
  lastName: null,
  adressPartOne: null,
  adressPartTwo: null,
  zip: null,
  city: null,
  roles: [
    {
      id: 1,
      name: "ROLE_USER",
    },
    {
      id: 2,
      name: "ROLE_MANAGER",
    },
  ],
  whishList: [
    {
      image: "image 1",
      name: "Livre 1",
      price: 14,
    },
    {
      image: "image 2",
      name: "Livre 2",
      price: 10,
    },
    {
      image: "image 3",
      name: "Livre 3",
      price: 8,
    },
  ],
  paymentMode: [
    {
      name: "carte 1",
      cardType: "Visa",
      cardNumber: "44554445444554",
      codeSecret: 456,
    },
    {
      name: "carte 2",
      cardType: "Card",
      cardNumber: "445544545444554",
      codeSecret: 367,
    },
    {
      name: "carte 3",
      cardType: "Visa",
      cardNumber: "44554455644554",
      codeSecret: 167,
    },
  ],
  order: [],
  adresses: [
    {
      streetNumber: "12",
      adressPartOne: "4 rue Nelson",
      adressPartTwo: "Batiment A",
      zip: 75004,
      city: "Paris",
      isInvoiceAdress: false,
    },
    {
      streetNumber: "1",
      adressPartOne: "5 rue George",
      adressPartTwo: "Batiment B",
      zip: 65004,
      city: "Ville",
      isInvoiceAdress: true,
    },
    {
      streetNumber: "3",
      adressPartOne: "15 rue George",
      adressPartTwo: "Batiment C",
      zip: 45004,
      city: "Ville G",
      isInvoiceAdress: false,
    },
    {
      streetNumber: "4",
      adressPartOne: "15 rue Lion",
      adressPartTwo: "Batiment D",
      zip: 25004,
      city: "Ville GH",
      isInvoiceAdress: false,
    },
  ],
};

export default data;
