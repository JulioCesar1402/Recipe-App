export const getFoodByIngredients = (input) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`)
  .then((response) => (
    response
      .json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));

export const getFoodByName = (input) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
  .then((result) => (
    result
      .json()
      .then((json) => (result.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));

export const getFoodByFirstLetter = (input) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`)
  .then((results) => (
    results
      .json()
      .then((json) => (results.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));

export const getFoodsInitial = () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
  .then((initial) => (
    initial
      .json()
      .then((json) => (initial.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));

export async function copyLink(copy, setShow, typeRecipe, idRecipe) {
  await copy(`http://localhost:3000/${typeRecipe}/${idRecipe}`);
  setShow(true);
}

export const getFoodsCategory = () => fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
  .then((categories) => (
    categories
      .json()
      .then((json) => (categories.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));

export function getFoodsByCategory(value) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`)
    .then((category) => (
      category
        .json()
        .then((json) => (category.ok ? Promise.resolve(json) : Promise.reject(json)))
    ));
}

export function getFoodsByID(value) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${value}`)
    .then((id) => (
      id
        .json()
        .then((json) => (id.ok ? Promise.resolve(json) : Promise.reject(json)))
    ));
}
