import GithubLogoImg from "../../../assets/github-icon.png";

import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <img src={GithubLogoImg} alt="Github Logo" />
      <h1>GitHub READMe.md Viewer</h1>
    </Container>
  );
}
