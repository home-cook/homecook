import { Pane, Text, Heading } from "evergreen-ui";
import Link from "next/link";

const BigCard = ({ attr }) => {
  const getEnding = () => {
    return attr.image.split(".")[1];
  };
  return (
    <div className="card mr-16">
      <Link href="/recipe/[id]" as={`/recipe/${attr.id}`}>
        <a>
          <img
            src={`https://spoonacular.com/recipeImages/${
              attr.id
            }-636x393.${getEnding()}`}
          />
          <h1 className="text-3xl">{attr.title}</h1>
          <h1 className="text-l">Prep time: {attr.readyInMinutes} minutes</h1>
        </a>
      </Link>
    </div>
  );
};

export default BigCard;
