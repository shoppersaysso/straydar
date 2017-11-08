export function getCats() {
  const cats = [
    {color: "black", age: "adult", details: "Has white on front two paws"},
    {color: "orange", age: "kitten", details: "Has white collar"},
    {color: "white", age: "adult", details: "Blue eyes"},
  ];
  return {
    type: 'GET_CATS',
    cats
  };
};

export function addCat(cat){
  return {
    type: 'ADD_CAT',
  };
};
