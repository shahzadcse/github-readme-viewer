import { BiListUl } from "react-icons/bi";
import { Container } from "./styles";
import Markdown from "markdown-to-jsx";

type Props = {
  readme: string;
};

const ReadMeContent = (props: Props) => {
  return (
    <>
      <Container>
        <BiListUl size={20} /> #### README.md ####
        <Markdown>{props.readme}</Markdown>
      </Container>
    </>
  );
};

export default ReadMeContent;
