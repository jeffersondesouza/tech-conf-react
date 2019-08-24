/* 
IMPURA
const getCervejas = page => {
  return fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=3`);
};
*/
export const getCervejas = page => ({
  method: "GET",
  path: `https://api.punkapi.com/v2/beers?page=${page}&per_page=3`,
  data: {}
});

export default {
  getCervejas
};
