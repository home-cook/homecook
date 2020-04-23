import { Pane, Text, Heading } from "evergreen-ui";

const BigCard = ({ attr }) => {
  console.log(attr);
  return (
    <>
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
        <Heading size={600}>{attr.recipe.label}</Heading>
        <img src={attr.recipe.image} />
        <Heading size={300}>Author Name</Heading>
      </Pane>
    </>
  );
};

export default BigCard;
