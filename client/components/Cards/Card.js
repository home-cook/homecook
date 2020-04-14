import { Pane, Text, Heading } from "evergreen-ui";
import Link from "next/link";

const Card = ({ attr }) => {
  return (
    <Link href="/recipe/[id]" as={`recipe/${attr.id}`}>
      <a>
        <Pane
          height={360}
          width={340}
          margin={20}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          border="default"
        >
          <Heading size={600}>{attr.title}</Heading>
          <img
            src={`https://spoonacular.com/recipeImages/${attr.id}-556x370.jpg`}
          />
          <Heading size={300}>Author Name</Heading>
        </Pane>
      </a>
    </Link>
  );
};

export default Card;
