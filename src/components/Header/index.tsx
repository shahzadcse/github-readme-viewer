import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

import { Container, UserImg } from "./styles";

import { BiArrowBack } from "react-icons/bi";
import { ReactElement } from "react";

interface HeaderProps {
  directory: string;
  icon: ReactElement;
}

export function Header(props: HeaderProps) {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <Container>
      <BiArrowBack color={"#FFF"} onClick={() => navigate("/user")} />
      <span>
        {user.login}/{props.directory}
      </span>
      {props.icon}
      <UserImg>
        <img src={user.avatar_url} alt="User Avatar - Github" />
      </UserImg>
    </Container>
  );
}
