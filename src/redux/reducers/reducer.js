const initialState = {
  carts: [
    {
      id: 7,
      rname: "Hocco Eatery",
      imgdata:
        "https://b.zmtcdn.com/data/pictures/chains/5/110155/811c01a5430d50d3260f77917da99e12_o2_featured_v2.jpg",
      address: "North Indian, Fast Food",
      delimg:
        "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
      somedata: "500 + order placed from here recently",
      price: 300,
      rating: "3.8",
      arrimg:
        "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
      qnty: 1,
    },
    {
      id: 8,
      rname: "Chai Wai",
      imgdata:
        "https://b.zmtcdn.com/data/pictures/3/18514413/0a17b72e9fec52a3ca736f4c2ea3646f_o2_featured_v2.jpg",
      address: "Tea, Coffee, Shake, Beverages",
      delimg:
        "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
      somedata: "500 + order placed from here recently",
      price: 100,
      rating: "3.2",
      arrimg:
        "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
      qnty: 1,
    },
    {
      id: 9,
      rname: "HL Frankie",
      imgdata:
        "https://b.zmtcdn.com/data/pictures/7/19639627/94c0a4cf15c02d3982d154e2c5dd8cbb_o2_featured_v2.jpg",
      address: "Burger, Sandwich, Fast Food",
      delimg:
        "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
      somedata: "2525 + order placed from here recently",
      price: 100,
      rating: "3.8",
      arrimg:
        "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
      qnty: 1,
    },
  ],
};

export const cartreducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }
    case "REMOVE_CART":
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };

    case "REMOVE_IND":
      const itemIndex_dec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[itemIndex_dec].qnty >= 1) {
        state.carts[itemIndex_dec].qnty -= 1;
        return {
          ...state,
          carts: [...state.carts],
        };
      }
    default:
      return state;
  }
};
