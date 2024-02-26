// import React from "react";
import { Outlet } from "react-router-dom";

function TeamPageLayout() {
  return (
    <>
      <h2>Meet the team</h2>

      <Outlet />
    </>
  );
}

export default TeamPageLayout;
