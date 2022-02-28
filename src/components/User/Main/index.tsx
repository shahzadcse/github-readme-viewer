import { useState, useEffect } from "react";
import { UserData } from "../../../hooks/useUser";
import { api } from "../../../services/api";

import { Container, InfosContainer } from "./styles";

import { RiGitRepositoryLine } from "react-icons/ri";

interface MainProps {
  user: UserData | undefined;
  auxUser: string | undefined;
  userRepos: () => void;
}

export function Main(props: MainProps) {
  const [auxUserData, setAuxUserData] = useState<UserData>();

  useEffect(() => {
    async function getAuxUserData() {
      await api
        .get(`users/${props.auxUser}`)
        .then((response) => setAuxUserData(response.data));
    }

    if (props.auxUser !== undefined) getAuxUserData();
  }, [props.auxUser]);

  return (
    <Container>
      <h1>
        {props.user === undefined
          ? `${auxUserData?.name}`
          : `${props.user.name}`}
      </h1>
      <div className="bio">
        <span>
          {props.user === undefined
            ? `${auxUserData?.bio}`
            : `${props.user.bio}`}
        </span>
      </div>
      <InfosContainer>
        <div
          onClick={(e) =>
            props.user === undefined ? e.preventDefault : props.userRepos()
          }
        >
          <RiGitRepositoryLine />
          <span>
            {props.user === undefined
              ? `${auxUserData?.public_repos}`
              : `${props.user.public_repos}`}{" "}
            repositories
          </span>
        </div>
      </InfosContainer>
    </Container>
  );
}
