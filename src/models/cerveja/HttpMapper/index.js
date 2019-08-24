/* const fromLoadCervejas = data => {
  console.log("data:", data);
  
  return data.map(item => ({
    id: Maybe(item.id).get(),
    name: Maybe(item.name).get(),
    imageUrl: Maybe(item.image_url).get(),
    abv: Maybe(item.abv).get(),
    attenuationLevel: Maybe(item.attenuation_level).get()
  }));
};
 */
const Maybe = data => ({
  get: () => data
});

const fromLoadCervejas = data => {
  console.log("data:", data);
  
  return data.map(item => ({
    id: Maybe(item.id).get(),
    name: Maybe(item.name).get(),
    imageUrl: Maybe(item.image_url).get(),
    abv: Maybe(item.abv).get(),
    attenuationLevel: Maybe(item.attenuation_level).get()
  }));
};

const toLoadCervejas = data => data;

export default {
  fromLoadCervejas,
  toLoadCervejas
};
