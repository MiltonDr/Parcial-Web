const obetenerValorInput = () => {
  let inputTexto = document.getElementById('input_coctel');
  let Valor = inputTexto.value;
  peticionApi(Valor);
};

const peticionApi = (coctel) => {
  const baseUrl = 'https://thecocktaildb.com/api/json/v1/1/';
  const enpoint = `search.php?s=${coctel}`;
  const url = `${baseUrl}${enpoint}`;

  axios
    .get(url)
    .then((res) => printData(res.data))
    .catch((err) => console.log(err));
};

const printData = (data) => {
  let respuesta = document.getElementById('showInfo');
  let imgURL = data.drinks[0].strDrinkThumb;

  respuesta.innerHTML = `
      <img src="${imgURL}" alt="Cóctel" class="coctel-img">
      <h3>${data.drinks[0].strDrink}</h3>
      <h3>${data.drinks[0].strIngredient1}</h3>
      <h3>${data.drinks[0].strIngredient2}</h3>
      <h3>${data.drinks[0].strIngredient3}</h3>
  `;
};
