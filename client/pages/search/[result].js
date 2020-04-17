import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Card from "../../components/Cards/Card";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/Search/Search";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();
  const { result } = router.query;

  const getSearchResults = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/search?query=${result}&number=10&apiKey=0713bac886d245648e7d89a46033da15`
    );
    const res = await data.json();
    setSearchResults(res.results);
  };

  useEffect(() => {
    if (result) {
      getSearchResults();
    }
  }, [result]);

  console.log(searchResults.map((i) => i.title));

  return (
    <>
      <Header />
      <SearchBar />
      <div className="all-cards">
        {searchResults.map((attr, ind) => {
          return <Card attr={attr} key={ind} />;
        })}
      </div>
      <style jsx>{`
        .all-cards {
          display: flex;
          flex-wrap: wrap;
        }
        .big-cards {
          display: flex;
          margin: 2rem;
        }
        .small-cards {
          display: flex;
          padding-bottom: 5rem;
          margin: 2rem;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
};

export default Search;
