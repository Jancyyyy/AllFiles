import 'package:mama_put/constants/image_constants.dart';

// DATA SET FOR THE MEALS

// DETAILS
const String details =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const menuList = [
  soupsMenu,
  extrasMenu,
  drinksMenu,
  breakFastMenu,
  mainDishMenu,
  swallowMenu,
  proteinMenu
];

// MENUS
const soupsMenu = {
  'name': 'Soups',
  'image': ImageConstants.menuImages + 'soups.jpg'
};
const extrasMenu = {
  'name': 'Extras',
  'image': ImageConstants.menuImages + 'extras.png'
};
const drinksMenu = {
  'name': 'Drinks',
  'image': ImageConstants.menuImages + 'drinks.jpg'
};
const breakFastMenu = {
  'name': 'Breakfast',
  'image': ImageConstants.menuImages + 'breakfast.jpeg'
};
const mainDishMenu = {
  'name': 'Main Dish',
  'image': ImageConstants.menuImages + 'main_dish.jpg'
};
const swallowMenu = {
  'name': 'Swallows',
  'image': ImageConstants.menuImages + 'swallows.jpg'
};
const proteinMenu = {
  'name': 'Proteins',
  'image': ImageConstants.menuImages + 'proteins.jpg'
};

const Map<String, List<Map>> dataSET = {
  'meal': [
    // BREAKFASTS
    {
      'name': 'Pap',
      'image': ImageConstants.mealImages + 'pap.jpg',
      'rating': 4.7,
      'detail': details,
      'price': 300,
      'menu': breakFastMenu
    },
    {
      'name': 'Akara',
      'image': ImageConstants.mealImages + 'akara.jpg',
      'rating': 4.6,
      'detail': details,
      'price': 100,
      'menu': breakFastMenu
    },
    {
      'name': 'Custard',
      'image': ImageConstants.mealImages + 'custard.jpg',
      'rating': 4.6,
      'detail': details,
      'price': 300,
      'menu': breakFastMenu
    },
    {
      'name': 'Boiled Yam',
      'image': ImageConstants.mealImages + 'boiled_yam.jpg',
      'rating': 4.3,
      'detail': details,
      'price': 700,
      'menu': breakFastMenu
    },
    {
      'name': 'Yam Fries',
      'image': ImageConstants.mealImages + 'yam_fries.jpg',
      'rating': 4.4,
      'detail': details,
      'price': 750,
      'menu': breakFastMenu
    },
    {
      'name': 'Boiled Plantain',
      'image': ImageConstants.mealImages + 'boiled_plantain.jpg',
      'rating': 4.4,
      'detail': details,
      'price': 550,
      'menu': breakFastMenu
    },
    {
      'name': 'Toast Bread',
      'image': ImageConstants.mealImages + 'toast_bread.jpg',
      'rating': 4.5,
      'detail': details,
      'price': 200,
      'menu': breakFastMenu
    },

    // MAIN DISH
    {
      'name': 'Village Rice',
      'image': ImageConstants.mealImages + 'village_rice.jpg',
      'rating': 4.5,
      'detail': details,
      'price': 700,
      'menu': mainDishMenu
    },
    {
      'name': 'Jollof Rice',
      'image': ImageConstants.mealImages + 'jollof_rice.jpg',
      'rating': 4.7,
      'detail': details,
      'price': 750,
      'menu': mainDishMenu
    },
    {
      'name': 'Spaghetti',
      'image': ImageConstants.mealImages + 'spaghetti.jpg',
      'rating': 4.6,
      'detail': details,
      'price': 500,
      'menu': mainDishMenu
    },
    {
      'name': 'White Rice',
      'image': ImageConstants.mealImages + 'white_rice.jpg',
      'rating': 4.5,
      'detail': details,
      'price': 700,
      'menu': mainDishMenu
    },
    {
      'name': 'Coconut Rice',
      'image': ImageConstants.mealImages + 'coconut_rice.jpg',
      'rating': 4.7,
      'detail': details,
      'price': 750,
      'menu': mainDishMenu
    },
    {
      'name': 'Fried Rice',
      'image': ImageConstants.mealImages + 'fried_rice.jpg',
      'rating': 4.7,
      'detail': details,
      'price': 700,
      'menu': mainDishMenu
    },
    {
      'name': 'Rice & Beans',
      'image': ImageConstants.mealImages + 'rice_beans.jpg',
      'rating': 4.5,
      'detail': details,
      'price': 700,
      'menu': mainDishMenu
    },

    // EXTRAS
    {
      'name': 'Plantain (Dodo)',
      'image': ImageConstants.mealImages + 'fried_plantain.png',
      'rating': 4.7,
      'detail': details,
      'price': 50,
      'menu': extrasMenu
    },
    {
      'name': 'Moi Moi',
      'image': ImageConstants.mealImages + 'moimoi.jpg',
      'rating': 4.6,
      'detail': details,
      'price': 150,
      'menu': extrasMenu
    },
    {
      'name': 'Boiled Egg',
      'image': ImageConstants.mealImages + 'boiled_egg.jpg',
      'rating': 4.5,
      'detail': details,
      'price': 150,
      'menu': extrasMenu
    },
    // {
    //   'name': 'Fried Egg',
    //   'image': ImageConstants.mealImages + 'fried_rice.jpg',
    //   'rating': 4.6,
    //   'detail': details,
    //   'price': 200,
    //   'menu': extrasMenu
    // },
    {
      'name': 'Salad',
      'image': ImageConstants.mealImages + 'salad.jpg',
      'rating': 4.6,
      'detail': details,
      'price': 300,
      'menu': extrasMenu
    },

    // SOUPS
    {
      'name': 'Egusi',
      'image': ImageConstants.mealImages + 'egusi.jpg',
      'rating': 4.7,
      'detail': details,
      'price': 200,
      'menu': soupsMenu
    },
    {
      'name': 'Afang',
      'image': ImageConstants.mealImages + 'afang.jpg',
      'rating': 4.6,
      'detail': details,
      'price': 150,
      'menu': soupsMenu
    },
    {
      'name': 'Edikaikong',
      'image': ImageConstants.mealImages + 'edikaikong.jpg',
      'rating': 4.7,
      'detail': details,
      'price': 200,
      'menu': soupsMenu
    },
    {
      'name': 'Ofada Sauce',
      'image': ImageConstants.mealImages + 'ofada_sauce.jpg',
      'rating': 4.5,
      'detail': details,
      'price': 100,
      'menu': soupsMenu
    },
    {
      'name': 'Efo riro',
      'image': ImageConstants.mealImages + 'efo_riro.jpg',
      'rating': 4.7,
      'detail': details,
      'price': 200,
      'menu': soupsMenu
    },
    {
      'name': 'Ewedu',
      'image': ImageConstants.mealImages + 'ewedu.jpg',
      'rating': 4.5,
      'detail': details,
      'price': 100,
      'menu': soupsMenu
    },

    // SWALLOWS
    {
      'name': 'Eba',
      'image': ImageConstants.mealImages + 'eba.jpg',
      'rating': 4.5,
      'detail': details,
      'price': 150,
      'menu': swallowMenu
    },
    {
      'name': 'Amala',
      'image': ImageConstants.mealImages + 'amala.jpg',
      'rating': 4.5,
      'detail': details,
      'price': 150,
      'menu': swallowMenu
    },
    {
      'name': 'Semo',
      'image': ImageConstants.mealImages + 'semo.jpg',
      'rating': 4.5,
      'detail': details,
      'price': 150,
      'menu': swallowMenu
    },
    {
      'name': 'Wheat',
      'image': ImageConstants.mealImages + 'wheat.jpg',
      'rating': 4.5,
      'detail': details,
      'price': 150,
      'menu': swallowMenu
    },

    // PROTEINS
    {
      'name': 'Panla Fish',
      'image': ImageConstants.mealImages + 'panla.jpg',
      'rating': 4.6,
      'detail': details,
      'price': 250,
      'menu': proteinMenu
    },
    {
      'name': 'Fried Titus',
      'image': ImageConstants.mealImages + 'titus.jpg',
      'rating': 4.5,
      'detail': details,
      'price': 250,
      'menu': proteinMenu
    },
    // {
    //   'name': 'Smoked Fish',
    //   'image': details,
    //   'rating': 4.6,
    //   'detail': details,
    //   'price': 250,
    //   'menu': proteinMenu
    // },
    // {
    //   'name': 'Panla Fish',
    //   'image': details,
    //   'rating': 4.5,
    //   'detail': details,
    //   'price': 250,
    //   'menu': proteinMenu
    // },
    {
      'name': 'Beef',
      'image': ImageConstants.mealImages + 'beef.jpg',
      'rating': 4.5,
      'detail': details,
      'price': 250,
      'menu': proteinMenu
    },
    {
      'name': 'Assorted',
      'image': ImageConstants.mealImages + 'assorted.jpg',
      'rating': 4.5,
      'detail': details,
      'price': 250,
      'menu': proteinMenu
    },
    {
      'name': 'Ogunfe (Goat Meat)',
      'image': ImageConstants.mealImages + 'ogunfe.jpg',
      'rating': 4.8,
      'detail': details,
      'price': 500,
      'menu': proteinMenu
    },
    {
      'name': 'Grilled Chicken',
      'image': ImageConstants.mealImages + 'grilled_chicken.jpg',
      'rating': 4.7,
      'detail': details,
      'price': 550,
      'menu': proteinMenu
    },

    // THIRST QUENCHERS
    {
      'name': 'Water',
      'image': ImageConstants.mealImages + 'water.jpg',
      'rating': 4.7,
      'detail': details,
      'price': 200,
      'menu': drinksMenu
    },
    {
      'name': 'Pepsi/Mirinda',
      'image': ImageConstants.mealImages + 'pepsi.jpg',
      'rating': 4.5,
      'detail': details,
      'price': 250,
      'menu': drinksMenu
    },
    {
      'name': 'Coke/Fanta/Sprite',
      'image': ImageConstants.mealImages + 'malt.jpeg',
      'rating': 4.5,
      'detail': details,
      'price': 250,
      'menu': drinksMenu
    },
    {
      'name': 'Malt',
      'image': ImageConstants.mealImages + 'malt.jpeg',
      'rating': 4.5,
      'detail': details,
      'price': 250,
      'menu': drinksMenu
    },
    {
      'name': 'Lucozade',
      'image': ImageConstants.mealImages + 'lucozade.jpg',
      'rating': 4.6,
      'detail': details,
      'price': 400,
      'menu': drinksMenu
    },
    {
      'name': 'Hollandia',
      'image': ImageConstants.mealImages + 'hollandia.jpg',
      'rating': 4.7,
      'detail': details,
      'price': 400,
      'menu': drinksMenu
    },
  ]
};
