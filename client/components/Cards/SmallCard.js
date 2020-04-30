import { Pane, Text, Heading } from "evergreen-ui";
import Link from "next/link";

const SmallCard = ({ attr }) => {
  const getEnding = () => {
    return attr.image.split(".")[1];
  };

  return (
    <div className="card mr-16 mb-16 max-w-xs">
      <Link href="/recipe/[id]" as={`/recipe/${attr.id}`}>
        <a>
          <img
            src={`https://spoonacular.com/recipeImages/${
              attr.id
            }-312x231.${getEnding()}`}
          />
          <div className="border-solid h-32 border-2 border-gray-400 max-w-40">
            <h1 className="text-xl">{attr.title}</h1>
            <h1 className="text-l">Prep time: {attr.readyInMinutes} minutes</h1>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default SmallCard;
