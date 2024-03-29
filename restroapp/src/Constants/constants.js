import {
  ItemCategoryMappings,
  ItemTimeMappings,
  ItemVegNonVegMappings,
} from "./mappings";

export const ItemDetailsProps = {
  itemTitle: "Veg Dum Biryani",
  itemDescription:
    "This biryani comes with two pieces of chicken, raita, gravy and is cooked in our freshly prepared spice blend. it is moderately spicy and serves two.",
};

export const MenuItems = [
  {
    itemId: "burger",
    itemTitle: "Burger",
    imageUrl: "burger",
  },
  {
    itemId: "biryani",
    itemTitle: "Biryani",
    imageUrl: "biryanibowl",
  },
  {
    itemId: "thali",
    itemTitle: "Thali",
    imageUrl: "thali",
  },
  {
    itemId: "noodles",
    itemTitle: "Noodles",
    imageUrl: "noodles",
  },
  {
    itemId: "pizza",
    itemTitle: "Pizza",
    imageUrl: "pizza",
  },
  {
    itemId: "roti",
    itemTitle: "Roti",
    imageUrl: "roti",
  },
  {
    itemId: "dosa",
    itemTitle: "Dosa",
    imageUrl: "dosa",
  },
  {
    itemId: "idly",
    itemTitle: "Idly",
    imageUrl: "idly",
  },
];

export const itemCategories = {
  biryani: {
    vegBiryani: {
      itemId: "vegBiryani",
      itemTitle: "Veg biryani",
      imageUrl: "vegBiryani",
      itemPrice: "200",
    },
    chickenBiryani: {
      itemId: "chickenBiryani",
      itemTitle: "Chicken biryani",
      imageUrl: "chickenBiryani",
      itemPrice: "250",
    },
    muttonBiryani: {
      itemId: "muttonBiryani",
      itemTitle: "Mutton biryani",
      imageUrl: "muttonBiryani",
      itemPrice: "300",
    },
  },
  dosa: {
    plainDosa: {
      itemId: "plainDosa",
      itemTitle: "Plain Dosa",
      imageUrl: "plainDosa",
      itemPrice: "30",
    },
    masalaDosa: {
      itemId: "masalaDosa",
      itemTitle: "Masala Dosa",
      imageUrl: "masalaDosa",
      itemPrice: "40",
    },
    ravvaDosa: {
      itemId: "ravvaDosa",
      itemTitle: "Ravva Dosa",
      imageUrl: "ravvaDosa",
      itemPrice: "50",
    },
  },
  idly: {
    plainIdly: {
      itemId: "plainIdly",
      itemTitle: "Idly",
      imageUrl: "plainIdly",
      itemPrice: "30",
    },
    gheeIdly: {
      itemId: "gheeIdly",
      itemTitle: "Ghee Podi Idly",
      imageUrl: "gheeIdly",
      itemPrice: "40",
    },
    sambarIdly: {
      itemId: "sambarIdly",
      itemTitle: "Sambar Idly",
      imageUrl: "sambarIdly",
      itemPrice: "35",
    },
  },
};

export const menuItems = [
  {
    itemNo: 1,
    itemId: "idly",
    itemTitle: "Idly",
    itemCategory: ItemCategoryMappings.IDLY,
    perPlatePieces: 3,
    itemPrice: 40,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.BREAKFAST,
    imageUrl: "idly",
  },
  {
    itemNo: 2,
    itemId: "gheeIdly",
    itemTitle: "Ghee Podi Idly",
    itemCategory: ItemCategoryMappings.IDLY,
    perPlatePieces: 3,
    itemPrice: 50,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.BREAKFAST,
    imageUrl: "gheeIdly",
  },
  {
    itemNo: 3,
    itemId: "vadaMedu",
    itemTitle: "Vada(Medu)",
    itemCategory: ItemCategoryMappings.VADA,
    perPlatePieces: 3,
    itemPrice: 50,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.BREAKFAST,
    imageUrl: "vada",
  },
  {
    itemNo: 4,
    itemId: "masalaVada",
    itemTitle: "Masala Vada",
    itemCategory: ItemCategoryMappings.VADA,
    perPlatePieces: 3,
    itemPrice: 30,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.BREAKFAST,
    imageUrl: "idly",
  },
  {
    itemNo: 5,
    itemId: "nelloreBonda",
    itemTitle: "Nellore Bonda",
    itemCategory: ItemCategoryMappings.VADA,
    perPlatePieces: 3,
    itemPrice: 40,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.BREAKFAST,
    imageUrl: "idly",
  },
  {
    itemNo: 6,
    itemId: "poori",
    itemTitle: "Poori",
    itemCategory: ItemCategoryMappings.POORI,
    perPlatePieces: 2,
    itemPrice: 60,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.BREAKFAST,
    imageUrl: "poori",
  },
  {
    itemNo: 7,
    itemId: "plainDosa",
    itemTitle: "Plain Dosa",
    itemCategory: ItemCategoryMappings.DOSA,
    perPlatePieces: 1,
    itemPrice: 40,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.BREAKFAST,
    imageUrl: "idly",
  },
  {
    itemNo: 8,
    itemId: "masalaDosa",
    itemTitle: "Masala Dosa",
    itemCategory: ItemCategoryMappings.DOSA,
    perPlatePieces: 1,
    itemPrice: 50,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.BREAKFAST,
    imageUrl: "idly",
  },
  {
    itemNo: 9,
    itemId: "karamDosa",
    itemTitle: "Karam Dosa",
    itemCategory: ItemCategoryMappings.DOSA,
    perPlatePieces: 1,
    itemPrice: 50,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.BREAKFAST,
    imageUrl: "idly",
  },
  {
    itemNo: 10,
    itemId: "gheeDosa",
    itemTitle: "Ghee Dosa",
    itemCategory: ItemCategoryMappings.DOSA,
    perPlatePieces: 1,
    itemPrice: 50,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.BREAKFAST,
    imageUrl: "idly",
  },
  {
    itemNo: 11,
    itemId: "gheeKaramDosa",
    itemTitle: "Ghee Karam Dosa",
    itemCategory: ItemCategoryMappings.DOSA,
    perPlatePieces: 1,
    itemPrice: 60,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.BREAKFAST,
    imageUrl: "idly",
  },
  {
    itemNo: 12,
    itemId: "gheeKaramPodiDosa",
    itemTitle: "Ghee Karam Podi Dosa",
    itemCategory: ItemCategoryMappings.DOSA,
    perPlatePieces: 1,
    itemPrice: 70,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.BREAKFAST,
    imageUrl: "idly",
  },
  {
    itemNo: 13,
    itemId: "plainPesarattu",
    itemTitle: "Plain Pesarattu",
    itemCategory: ItemCategoryMappings.DOSA,
    perPlatePieces: 1,
    itemPrice: 50,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.BREAKFAST,
    imageUrl: "idly",
  },
  {
    itemNo: 14,
    itemId: "onionPesarattu",
    itemTitle: "Onion Pesarattu",
    itemCategory: ItemCategoryMappings.DOSA,
    perPlatePieces: 1,
    itemPrice: 60,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.BREAKFAST,
    imageUrl: "idly",
  },
  {
    itemNo: 15,
    itemId: "upmaPesarattu",
    itemTitle: "Upma Pesarattu",
    itemCategory: ItemCategoryMappings.DOSA,
    perPlatePieces: 1,
    itemPrice: 70,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.BREAKFAST,
    imageUrl: "idly",
  },
  {
    itemNo: 16,
    itemId: "setDosa",
    itemTitle: "Set Dosa",
    itemCategory: ItemCategoryMappings.DOSA,
    perPlatePieces: 2,
    itemPrice: 60,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.BREAKFAST,
    imageUrl: "idly",
  },
  {
    itemNo: 17,
    itemId: "dosaChicken",
    itemTitle: "Dosa Chicken",
    itemCategory: ItemCategoryMappings.DOSA,
    perPlatePieces: 2,
    itemPrice: 140,
    vegNonVeg: ItemVegNonVegMappings.NONVEG,
    itemTime: ItemTimeMappings.BREAKFAST,
    imageUrl: "idly",
  },
  {
    itemNo: 18,
    itemId: "idlyChicken",
    itemTitle: "Idly Chicken",
    itemCategory: ItemCategoryMappings.DOSA,
    perPlatePieces: 3,
    itemPrice: 140,
    vegNonVeg: ItemVegNonVegMappings.NONVEG,
    itemTime: ItemTimeMappings.BREAKFAST,
    imageUrl: "idly",
  },
  {
    itemNo: 19,
    itemId: "dosaMuttonCurry",
    itemTitle: "Dosa Mutton Curry",
    itemCategory: ItemCategoryMappings.DOSA,
    perPlatePieces: 2,
    itemPrice: 250,
    vegNonVeg: ItemVegNonVegMappings.NONVEG,
    itemTime: ItemTimeMappings.BREAKFAST,
    imageUrl: "idly",
  },
  {
    itemNo: 20,
    itemId: "idlyMuttonCurry",
    itemTitle: "Idly Mutton Curry",
    itemCategory: ItemCategoryMappings.DOSA,
    perPlatePieces: 3,
    itemPrice: 250,
    vegNonVeg: ItemVegNonVegMappings.NONVEG,
    itemTime: ItemTimeMappings.BREAKFAST,
    imageUrl: "idly",
  },
  {
    itemNo: 21,
    itemId: "idlyFishPulusu",
    itemTitle: "Idly Fish Pulusu",
    itemCategory: ItemCategoryMappings.IDLY,
    perPlatePieces: 3,
    itemPrice: 140,
    vegNonVeg: ItemVegNonVegMappings.NONVEG,
    itemTime: ItemTimeMappings.BREAKFAST,
    imageUrl: "idly",
  },
  {
    itemNo: 22,
    itemId: "dosaFishPulusu",
    itemTitle: "Dosa Fish Pulusu",
    itemCategory: ItemCategoryMappings.DOSA,
    perPlatePieces: 2,
    itemPrice: 140,
    vegNonVeg: ItemVegNonVegMappings.NONVEG,
    itemTime: ItemTimeMappings.BREAKFAST,
    imageUrl: "idly",
  },
  {
    itemNo: 23,
    itemId: "pongal",
    itemTitle: "Pongal",
    itemCategory: ItemCategoryMappings.RICE,
    perPlatePieces: 1,
    itemPrice: 70,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.BREAKFAST,
    imageUrl: "idly",
  },
  {
    itemNo: 1,
    itemId: "punugulu",
    itemTitle: "Punugulu",
    itemCategory: ItemCategoryMappings.VADA,
    perPlatePieces: 10,
    itemPrice: 40,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.SNACKS,
    imageUrl: "idly",
  },
  {
    itemNo: 2,
    itemId: "vadaMedu",
    itemTitle: "Vada(Medu)",
    itemCategory: ItemCategoryMappings.VADA,
    perPlatePieces: 3,
    itemPrice: 50,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.SNACKS,
    imageUrl: "idly",
  },
  {
    itemNo: 3,
    itemId: "masalaVada",
    itemTitle: "Masala Vada",
    itemCategory: ItemCategoryMappings.VADA,
    perPlatePieces: 3,
    itemPrice: 30,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.SNACKS,
    imageUrl: "idly",
  },
  {
    itemNo: 4,
    itemId: "nelloreBonda",
    itemTitle: "Nellore Bonda",
    itemCategory: ItemCategoryMappings.VADA,
    perPlatePieces: 3,
    itemPrice: 40,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.SNACKS,
    imageUrl: "idly",
  },
  {
    itemNo: 5,
    itemId: "nelloreVada",
    itemTitle: "Nellore Vada",
    itemCategory: ItemCategoryMappings.VADA,
    perPlatePieces: 3,
    itemPrice: 50,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.SNACKS,
    imageUrl: "idly",
  },

  {
    itemNo: 1,
    itemId: "chickenBiryani",
    itemTitle: "Chicken Biryani",
    itemCategory: ItemCategoryMappings.BIRYANI,
    itemPrice: 200,
    vegNonVeg: ItemVegNonVegMappings.NONVEG,
    itemTime: ItemTimeMappings.DINNER,
    imageUrl: "idly",
  },
  {
    itemNo: 2,
    itemId: "muttonBiryani",
    itemTitle: "Mutton Biryani",
    itemCategory: ItemCategoryMappings.BIRYANI,
    itemPrice: 275,
    vegNonVeg: ItemVegNonVegMappings.NONVEG,
    itemTime: ItemTimeMappings.DINNER,
    imageUrl: "idly",
  },
  {
    itemNo: 3,
    itemId: "curdRice",
    itemTitle: "Curd Rice",
    itemCategory: ItemCategoryMappings.RICE,
    itemPrice: 50,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.DINNER,
    imageUrl: "idly",
  },
  {
    itemNo: 4,
    itemId: "sambarRice",
    itemTitle: "Sambar Rice",
    itemCategory: ItemCategoryMappings.BIRYANI,
    itemPrice: 70,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.DINNER,
    imageUrl: "idly",
  },
  {
    itemNo: 5,
    itemId: "karvepakuRice",
    itemTitle: "Karvepaku Rice",
    itemCategory: ItemCategoryMappings.BIRYANI,
    itemPrice: 70,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.DINNER,
    imageUrl: "idly",
  },
  {
    itemNo: 6,
    itemId: "pulihora",
    itemTitle: "Pulihora",
    itemCategory: ItemCategoryMappings.BIRYANI,
    itemPrice: 70,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.DINNER,
    imageUrl: "idly",
  },
  {
    itemNo: 7,
    itemId: "panneerBiryani",
    itemTitle: "Panneer Biryani",
    itemCategory: ItemCategoryMappings.BIRYANI,
    itemPrice: 150,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.DINNER,
    imageUrl: "idly",
  },
  {
    itemNo: 8,
    itemId: "gutthiVankayaBiryani",
    itemTitle: "Gutthi Vankaya Biryani",
    itemCategory: ItemCategoryMappings.BIRYANI,
    itemPrice: 150,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.DINNER,
    imageUrl: "idly",
  },
  {
    itemNo: 9,
    itemId: "chickenCurry",
    itemTitle: "Chicken Curry",
    itemCategory: ItemCategoryMappings.CURRY,
    itemPrice: 120,
    vegNonVeg: ItemVegNonVegMappings.NONVEG,
    itemTime: ItemTimeMappings.DINNER,
    imageUrl: "idly",
  },
  {
    itemNo: 10,
    itemId: "muttonCurry",
    itemTitle: ItemCategoryMappings.CURRY,
    itemCategory: "curry",
    itemPrice: 200,
    vegNonVeg: ItemVegNonVegMappings.NONVEG,
    itemTime: ItemTimeMappings.DINNER,
    imageUrl: "idly",
  },
  {
    itemNo: 11,
    itemId: "fishPulusu",
    itemTitle: "Fish Pulusu",
    itemCategory: ItemCategoryMappings.CURRY,
    itemPrice: 120,
    vegNonVeg: ItemVegNonVegMappings.NONVEG,
    itemTime: ItemTimeMappings.DINNER,
    imageUrl: "idly",
  },
  {
    itemNo: 12,
    itemId: "whiteRice",
    itemTitle: "White Rice",
    itemCategory: ItemCategoryMappings.RICE,
    itemPrice: 40,
    vegNonVeg: ItemVegNonVegMappings.VEG,
    itemTime: ItemTimeMappings.DINNER,
    imageUrl: "idly",
  },
];
