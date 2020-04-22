import { useState } from "react";
import { SearchInput, Button } from "evergreen-ui";
// import Router from "next/router";
import { useRouter } from "next/router";
import Link from "next/link";

const Search = () => {
  const [searchValue, setSearchValue] = useState("search things");
  const router = useRouter();

  const updateValue = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const submitSearch = async (e) => {
    e.preventDefault();
    // const data = await fetch(
    //   `https://api.spoonacular.com/recipes/search?query=${searchValue}&number=2&apiKey=0713bac886d245648e7d89a46033da15`
    // );
    // let res = await data.json();
    // setSearchResults(res.results);
    router.push(`/search/${searchValue}`);
  };

  return (
    <main>
      <ul>
        <li>
          <form onSubmit={submitSearch}>
            <div className="search-list">
              <input
                type="text"
                className="search"
                placeholder={searchValue}
                onChange={updateValue}
              />
              <button type="submit" className="searchButton">
                {/* <Icon icon="search" color="muted" size="40" /> */}
              </button>
            </div>
          </form>
        </li>
        <div className="search-buttons">
          <li>
            <Button
              marginRight={16}
              appearance="minimal"
              size="50"
              height={40}
              intent="none"
            >
              Browse
            </Button>
          </li>
          <li>
            {" "}
            <Button
              marginRight={16}
              appearance="minimal"
              size="40"
              height={40}
              intent="none"
            >
              Healthy
            </Button>
          </li>
          <li>
            {" "}
            <Button
              marginRight={16}
              appearance="minimal"
              size="40"
              height={40}
              intent="none"
            >
              Top Recipes
            </Button>
            <Link href="/addRecipe/step-1" as={`/addRecipe/step-1`}>
              <Button
                marginRight={16}
                appearance="primary"
                size="40"
                height={40}
                intent="none"
              >
                Add a recipe!
              </Button>
            </Link>
          </li>
        </div>
      </ul>

      <style jsx>{`
          main {
            font-size: 2rem;
            background-color: #C4C4C4;
            height: 96px;
          }
          main ul {
              list-style-type: none;
              margin: 0;
              padding: 1rem;
              display: flex;
          }
          main ul li {
              cursor: pointer:
              padding: 2rem;
              flex: auto;
              text-align:center;
              margin-left: 2rem;
          }
          .search-buttons {
            display: flex;

          }
          .search {
            border: 3px solid #00B4CC;
            border-right: none;
            padding: 5px;
            height: 50px;
            border-radius: 5px 0 0 5px;
            outline: none;
            color: #9DBFAF;
          }
          .searchButton {
            width: 40px;
            height: 50px;
            border: 1px solid #00B4CC;
            background: #00B4CC;
            text-align: center;
            color: #fff;
            border-radius: 0 5px 5px 0;
            cursor: pointer;
            font-size: 20px;
          }

          .search-list {
            display: flex;
          }
        `}</style>
    </main>
  );
};

export default Search;
