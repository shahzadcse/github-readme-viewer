import { useUser } from "../../../hooks/useUser";

import { Container } from "./styles";
import { ReadMe } from "../ReadMe";
import { BiGitRepoForked, BiStar, BiLinkAlt, BiListUl } from "react-icons/bi";

export function Main() {
  const { repos } = useUser();
  console.log(repos);
  return (
    <Container>
      <ul>
        {repos.map((repo) => {
          return (
            <li key={repo.id}>
              <h1>{repo.name}</h1>
              <div className="desc-link">
                <span>{repo.description}</span>
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  <BiLinkAlt size={16} />
                </a>
              </div>
              <div className="fork-star">
                <BiGitRepoForked size={16} /> {repo.forks_count}
                <BiStar size={16} /> {repo.stargazers_count}
              </div>
              <div className="fork-star">
                <BiListUl size={16} />
                <ReadMe
                  fullname={repo.full_name}
                  default_branch={repo.default_branch}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
