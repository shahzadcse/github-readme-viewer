import { createContext, useContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../services/api";

interface UserProviderProps {
  children: ReactNode;
}

export interface UserData {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
  public_repos: number;
  bio: string;
}

interface ReposData {
  full_name: string;
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  default_branch: string;
}

export interface FollowData {
  id: number;
  login: string;
  avatar_url: string;
}

interface UserContextData {
  user: UserData;
  searchUser: (username: string | undefined) => Promise<number | void>;
  logOut: () => void;
  userRepos: () => void;
  repos: ReposData[];
  auxUser: string | undefined;
  lastPage: string | undefined;
  handleNewUser: () => void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: UserProviderProps): JSX.Element {
  const [user, setUser] = useState<UserData>({} as UserData);
  const [repos, setRepos] = useState<ReposData[]>([{}] as ReposData[]);

  const [auxUser, setAuxUser] = useState<string | undefined>();
  const [lastPage, setLastPage] = useState<string | undefined>();
  const navigate = useNavigate();

  async function searchUser(
    username: string | undefined
  ): Promise<number | void> {
    try {
      return await api.get(`users/${username}`).then((response) => {
        setUser(response.data);
        return response.data.id;
      });
    } catch {
      alert("Username was not found!");
      return 0;
    }
  }

  function logOut() {
    setUser({} as UserData);
    navigate("/");
  }

  async function userRepos() {
    try {
      await api
        .get(`users/${user.login}/repos`)
        .then((response) => setRepos(response.data))
        .then(() => navigate("/repos"));
    } catch {
      alert("Something went wrong :(");
    }
  }

  async function handleNewUser() {
    try {
      await api
        .get(`users/${auxUser}`)
        .then((response) => setUser(response.data))
        .then(() => navigate("/user"));
    } catch {
      alert("Something went wrong :(");
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        searchUser,
        logOut,
        userRepos,
        repos,
        auxUser,
        lastPage,
        handleNewUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser(): UserContextData {
  const context = useContext(UserContext);
  return context;
}
