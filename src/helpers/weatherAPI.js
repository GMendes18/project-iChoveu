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

export const getWeatherByCity = (/* cityURL */) => {
  //   seu código aqui
};
