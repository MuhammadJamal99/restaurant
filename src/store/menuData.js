const classicPizzas = [
  {
    id: "margherita",
    name: "Margherita",
    imageSrc: require("../assets/images/menu/margherita.jpg"),
    price: 10,
    description:
      "The most classic Neapolitan pizza, made with tomatoes sauce, mozzarella cheese and a touch of fresh basil.",
  },
  {
    id: "pepperoni",
    name: "Pepperoni",
    imageSrc: require("../assets/images/menu/pepperoni.jpg"),
    price: 12,
    description:
      "One of the most popular pizza, made with a standard base of tomatoes sauce and mozzarella, and completed by slices of delicious pepperoni.",
  },
  {
    id: "4formaggi",
    name: "Quattro Formaggi",
    imageSrc: require("../assets/images/menu/quattro-formaggi.jpg"),
    price: 12,
    description:
      "Quattro formaggi in italian literally means 'four cheeses'. Those are places on top of the standard pizza base and comprise of Mozzarella, Gorgonzola, Fontina and Parmigiano.",
  },
  {
    id: "capricciosa",
    name: "Capricciosa",
    imageSrc: require("../assets/images/menu/capricciosa.jpg"),
    price: 12,
    description:
      "Standard base of tomatoes sauce and mozzarella, enhanced with baked ham, mushrooms and artichoke.",
  },
  {
    id: "speckmascarpone",
    name: "Speck & Mascarpone",
    imageSrc: require("../assets/images/menu/speck-mascarpone.jpg"),
    price: 13,
    description:
      "Standard base of tomatoes sauce and mozzarella with mascarpone cheese on top and Italian speck, a type of prosciutto on top of that.",
  },
];

const calzones = [
  {
    id: "standardcalzone",
    name: "Standard",
    imageSrc: require("../assets/images/menu/calzone.jpg"),
    price: 11,
    description:
      "All the same ingredients as a standard pizza margherita, but in calzone's fashion.",
  },
  {
    id: "diablocalzone",
    name: "Diablo",
    imageSrc: require("../assets/images/menu/diablo-calzone.jpg"),
    price: 13,
    description:
      "Spicy calzone filled with tomatoes sauce, mozzarella, spicy sausage, red onions and chilli peppers.",
  },
  {
    id: "cheesecalzone",
    name: "Cheese Galore",
    imageSrc: require("../assets/images/menu/cheese-calzone.jpg"),
    price: 14,
    description:
      "Calzone filled with all sorts of cheese, mozzarella, provola, gorgonzola, cheddar and on top of it nice crispy molted cheese.",
  },
];

const breads = [
  {
    id: "garlicbread",
    name: "Garlic Bread",
    imageSrc: require("../assets/images/menu/garlic-bread.jpg"),
    price: 9,
    description: "Bread topped with garlic, olive oil, oregano and chives.",
  },
  {
    id: "focaccia",
    name: "Focaccia",
    imageSrc: require("../assets/images/menu/focaccia.jpg"),
    price: 9,
    description:
      "Classic Italian style focaccia garnished with rosemary and coarse salt.",
  },
  {
    id: "focacciacheese",
    name: "Cheese Focaccia",
    imageSrc: require("../assets/images/menu/focaccia-cheese.jpg"),
    price: 10,
    description: "Focaccia enchanges with delicious melted cheese on top.",
  },
];

export default {
  menuSections: [
    {
      title: "Classic Pizzas",
      items: classicPizzas,
    },
    {
      title: "Calzones",
      items: calzones,
    },
    {
      title: "Breads",
      items: breads,
    },
  ],
};
