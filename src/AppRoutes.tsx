import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { Repos } from "./pages/Repos";
import { AuxUser } from "./pages/AuxUser";

export const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/repos" element={<Repos />} />
      <Route path="/auxuser" element={<AuxUser />} />
    </Routes>
  );
};
