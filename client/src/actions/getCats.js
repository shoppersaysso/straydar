import fetch from 'isomorphic-fetch'

export function getCats() {
  fetch('/api/cats')
  }

export function addCat(cat){
  return {
    type: 'ADD_CAT',
  };
};
