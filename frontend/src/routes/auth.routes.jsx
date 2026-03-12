import React from "react";
import { Routes, Route } from "react-router-dom";

import Sign from "../pages/Signin";

function AuthRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Sign />} />
      </Routes>
  );
}
export default AuthRoutes;
