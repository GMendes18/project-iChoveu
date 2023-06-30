// Remova os comentários a medida que for implementando as funções
const weatherToken = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const weatherAPI = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${weatherToken}&q=${term}`;
  try {
    const result = await fetch(weatherAPI);
    const data = await result.json();
    if (!data.lenght) {
      window.alert('Nenhuma cidade encontrada');
    }
    return data;
  } catch (error) {
    return [];
  }
};
// console.log(searchCities('São Paulo'));

export const getWeatherByCity = async (cityURL) => {
  const weatherAPI = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${weatherToken}&q=${cityURL}`;
  const result = await fetch(weatherAPI);
  const data = await result.json();
  const { current, location } = data;
  const currentWeather = {
    name: location.name,
    country: location.country,
    temp: current.temp_c,
    condition: current.condition.text,
    icon: current.condition.icon,
    url: cityURL,
  };
  return currentWeather;
};
// console.log(getWeatherByCity('sao-paulo-sao-paulo-brazil'));
