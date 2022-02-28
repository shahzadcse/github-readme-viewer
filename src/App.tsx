import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./AppRoutes";
import { UserProvider } from "./hooks/useUser";

import { GlobalStyle } from "./styles/global";

const App: FC = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <GlobalStyle />
        <AppRoutes />
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
