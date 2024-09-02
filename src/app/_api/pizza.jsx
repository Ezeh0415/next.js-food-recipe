export default async function fetchPizza(pizza) {
    const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=93838a86-f043-44b3-b7cf-0e86da1d4167/${pizza}`);
  
    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }
  
    const posts = await res.json();
    const {status,results,data} = posts
    const {recipes} = data;
    return recipes;
  }