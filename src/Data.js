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
      id:1,
      name: "carte 1",
      cardType: "Visa",
      cardNumber: "44554445444554",
      codeSecret: 456,
    },
    {
      id:2,
      name: "carte 2",
      cardType: "Card",
      cardNumber: "445544545444554",
      codeSecret: 367,
    },
    {
      id:3,
      name: "carte 3",
      cardType: "Visa",
      cardNumber: "44554455644554",
      codeSecret: 167,
    },
  ],
  order: [
    {
        "id": 1,
        "product": [
            {
                "id": 1,
                "name": "name",
                "description": "descirption",
                "price": 13.0,
                "image": "image 1",
                "category": null
            },
            {
                "id": 2,
                "name": "name 2",
                "description": "bbb",
                "price": 10.0,
                "image": "image 2",
                "category": null
            }
        ],
        "quantity": 1.0
    },
    {
      "id": 1,
      "product": [
          {
              "id": 2,
              "name": "name 25",
              "description": "descirption 25",
              "price": 13.0,
              "image": "image 1",
              "category": null
          },
          {
              "id": 2,
              "name": "name 2 25",
              "description": "bbb 25",
              "price": 10.0,
              image: "image 2",
              category: null
          }
      ],
      quantity: 1.0
  }

],
  adresses: [
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
  ],
};

export default data;
