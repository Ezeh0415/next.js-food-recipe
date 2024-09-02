import fetchPizzas from "@/app/_api/pizza/user";

export async function generateMetadata({ params }) {
    const user = await fetchPizzas(params.user);
    
    return {
      title: `${user.publisher} | Next App`,
      description: `This is the page of ${user.title} `,
    };
  }

const pizzaUser = async ({params}) => {
    const pizza = await fetchPizzas(params.user)
  return (
    <main>
        <h1> {pizza.title} </h1>
    </main>
  );
};
export default pizzaUser;