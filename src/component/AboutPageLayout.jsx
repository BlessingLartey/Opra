import { NavLink, Outlet } from "react-router-dom";

export default function AboutPageLayout() {
  return (
    <>
      <div style={{ marginBottom: "2rem" }}>welcome to the about Page</div>

      <nav>
        <NavLink to="history">History</NavLink>
        &nbsp; | &nbsp;
        <NavLink to="mission">Mission</NavLink>
      </nav>

      <main style={{ marginTop: "1.3rem" }}>
        <Outlet />
      </main>
    </>
  );
}
