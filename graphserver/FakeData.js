
const Styles = [
  {
    id: 1,
    type: "Blanco",
    grapes: [

      {
        id: 4,
        name: "Chardonnay",

      },
      {
        id: 5,
        name: "Grauburgunder",

      },
      {
        id: 6,
        name: "Sylvaner",

      },
      {
        id: 7,
        name: "Gewurstraminer",

      },

      {
        id: 11,
        name: "Torrontes",
      },
    ]
  },
  {
    id: 2,
    type: "Tinto",
    grapes: [
      {
        id: 1,
        name: "Cabernet Sauvignon",
      },
      {
        id: 2,
        name: "Malbec",
      },
      {
        id: 3,
        name: "Syrah",
      },
      {
        id: 8,
        name: "Montepulciano",

      },
      {
        id: 9,
        name: "Sangiovese",

      },
      {
        id: 10,
        name: "Nebbiolo",
      },
    ]
  },
];


const Regions = [
  {
    id: 1,
    name: "Mosel",
  },
  {
    id: 2,
    name: "Reinghau",
  },
  {
    id: 3,
    name: "Piemonte"
  },
  {
    id: 4,
    name: "Toscana"
  },
  {
    id: 5,
    name: "Puglia"
  },
  {
    id: 6,
    name: "Mendoza"
  },
  {
    id: 7,
    name: "Salta"
  },
  {
    id: 7,
    name: "Patagonia"
  }
];

const Pairing = [
  {
    id: 1,
    name: "Carne de vaca",
  },
  {
    id: 2,
    name: "Cordeiro",
  },
  {
    id: 3,
    name: "Carne de porco"
  },
  {
    id: 4,
    name: "Massas"
  },
  {
    id: 5,
    name: "Aperitivos"
  }
];

const Countries = [
  {
    id: 1,
    name: "Alemanha",
    mainGrape: [
      {
        id: 5,
        name: "Grauburgunder",
        pairing: [
          {
            id: 5,
            name: "Aperitivos"
          },
          {
            id: 4,
            name: "Massas"
          },
        ]
      },
      {
        id: 6,
        name: "Sylvaner",
        pairing: [
          {
            id: 5,
            name: "Aperitivos"
          },
          {
            id: 4,
            name: "Massas"
          },
        ]
      },
      {
        id: 7,
        name: "Gewurstraminer",
        pairing: [
          {
            id: 5,
            name: "Aperitivos"
          },
          {
            id: 4,
            name: "Massas"
          },
        ]
      },
    ],
    regions: [
      {
        id: 1,
        name: "Mosel",
      },
      {
        id: 2,
        name: "Reinghau",
      },
    ]
  },
  {
    id: 2,
    name: "Italia",
    mainGrape: [
      {
        id: 8,
        name: "Montepulciano",
        pairing: [
          {
            id: 5,
            name: "Aperitivos"
          },
          {
            id: 4,
            name: "Massas"
          },
        ]
      },
      {
        id: 9,
        name: "Sangiovese",
        pairing: [
          {
            id: 5,
            name: "Aperitivos"
          },
          {
            id: 4,
            name: "Massas"
          },
        ]
      },
      {
        id: 10,
        name: "Nebbiolo",
        pairing: [
          {
            id: 5,
            name: "Aperitivos"
          },
          {
            id: 4,
            name: "Massas"
          },
        ]
      },
    ],
    regions: [
      {
        id: 3,
        name: "Piemonte"
      },
      {
        id: 4,
        name: "Toscana"
      },
      {
        id: 5,
        name: "Puglia"
      },
    ]
  },
  {
    id: 3,
    name: "Argentina",
    mainGrape: [
      {
        id: 11,
        name: "Torrontes",
        pairing: [
          {
            id: 5,
            name: "Aperitivos"
          },
          {
            id: 4,
            name: "Massas"
          },
        ],
      },
      {
        id: 1,
        name: "Cabernet Sauvignon",
        pairing: [
          {
            id: 1,
            name: "Carne de vaca",
          }
        ]
      },
      {
        id: 2,
        name: "Malbec",
        pairing: [
          {
            id: 1,
            name: "Carne de vaca",
          },
          {
            id: 3,
            name: "Carne de porco"
          },
        ]
      },
    ],
    regions: [
      {
        id: 6,
        name: "Mendoza"
      },
      {
        id: 7,
        name: "Salta"
      },
      {
        id: 7,
        name: "Patagonia"
      }
    ]
  }
];

const Grapes = [
  {
    id: 1,
    name: "Cabernet Sauvignon",
    pairing: [
      {
        id: 1,
        name: "Carne de vaca",
      }
    ]
  },
  {
    id: 2,
    name: "Malbec",
    pairing: [
      {
        id: 1,
        name: "Carne de vaca",
      },
      {
        id: 3,
        name: "Carne de porco"
      },
    ]
  },
  {
    id: 3,
    name: "Syrah",
    pairing: [
      {
        id: 1,
        name: "Carne de vaca",
      },
      {
        id: 3,
        name: "Carne de porco"
      },
    ]
  },
  {
    id: 4,
    name: "Chardonnay",
    pairing: [
      {
        id: 5,
        name: "Aperitivos"
      },
      {
        id: 4,
        name: "Massas"
      },
    ]
  },
  {
    id: 5,
    name: "Grauburgunder",
    pairing: [
      {
        id: 5,
        name: "Aperitivos"
      },
      {
        id: 4,
        name: "Massas"
      },
    ]
  },
  {
    id: 6,
    name: "Sylvaner",
    pairing: [
      {
        id: 5,
        name: "Aperitivos"
      },
      {
        id: 4,
        name: "Massas"
      },
    ]
  },
  {
    id: 7,
    name: "Gewurstraminer",
    pairing: [
      {
        id: 5,
        name: "Aperitivos"
      },
      {
        id: 4,
        name: "Massas"
      },
    ]
  },
  {
    id: 8,
    name: "Montepulciano",
    pairing: [
      {
        id: 5,
        name: "Aperitivos"
      },
      {
        id: 4,
        name: "Massas"
      },
    ]
  },
  {
    id: 9,
    name: "Sangiovese",
    pairing: [
      {
        id: 5,
        name: "Aperitivos"
      },
      {
        id: 4,
        name: "Massas"
      },
    ]
  },
  {
    id: 10,
    name: "Nebbiolo",
    pairing: [
      {
        id: 5,
        name: "Aperitivos"
      },
      {
        id: 4,
        name: "Massas"
      },
    ]
  },
  {
    id: 11,
    name: "Torrontes",
    pairing: [
      {
        id: 5,
        name: "Aperitivos"
      },
      {
        id: 4,
        name: "Massas"
      },
    ]
  },
];

const UserList = [
  {
    id: 1,
    name: "John",
    username: "john",
    age: 20,
    nationality: "CANADA",
    friends: [
      {
        id: 2,
        name: "Pedro",
        username: "PedroTech",
        age: 20,
        nationality: "BRAZIL",
      },
      {
        id: 5,
        name: "Kelly",
        username: "kelly2019",
        age: 5,
        nationality: "CHILE",
      },
    ],
  },
  {
    id: 2,
    name: "Pedro",
    username: "PedroTech",
    age: 20,
    nationality: "BRAZIL",
  },
  {
    id: 3,
    name: "Sarah",
    username: "cameron",
    age: 25,
    nationality: "INDIA",
    friends: [
      {
        id: 2,
        name: "Pedro",
        username: "PedroTech",
        age: 20,
        nationality: "BRAZIL",
      },
    ],
  },
  {
    id: 4,
    name: "Rafe",
    username: "rafe123",
    age: 60,
    nationality: "GERMANY",
  },
  {
    id: 5,
    name: "Kelly",
    username: "kelly2019",
    age: 5,
    nationality: "CHILE",
  },
];

const MovieList = [
  {
    id: 1,
    name: "Avengers Endgame",
    yearOfPublication: 2019,
    isInTheaters: true,
  },
  {
    id: 2,
    name: "Interstellar",
    yearOfPublication: 2007,
    isInTheaters: true,
  },
  {
    id: 3,
    name: "Superbad",
    yearOfPublication: 2009,
    isInTheaters: true,
  },
  {
    id: 4,
    name: "PedroTech The Movie",
    yearOfPublication: 2035,
    isInTheaters: false,
  },
];

module.exports = { UserList, MovieList, Grapes, Countries, Pairing, Regions, Styles };