import Cards from "../components/Cards/Cards";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import fetch from "isomorphic-unfetch";
import { BigRecipeProvider } from "../context/BigRecipeContext";

export async function getServerSideProps(context) {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/search?apiKey=0713bac886d245648e7d89a46033da15&number=14`
  );
  let res = await data.json();
  console.log(res);
  return {
    props: { res }, // will be passed to the page component as props
  };
}

const Home = (props) => {
  return (
    <>
      <BigRecipeProvider value={props.res.results}>
        <Header />
        <Search />
        <Cards />
      </BigRecipeProvider>
    </>
  );
};

export default Home;
