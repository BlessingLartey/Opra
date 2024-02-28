import { Outlet, NavLink } from "react-router-dom";

export default function MainPageLayout() {
  return (
    <>
      <div className="landing">
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="head-nav"
        >
          <span style={{ color: "blueviolet" }}>
            <strong>ReactVites</strong>
          </span>
          <ul
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "space-between",
              alignItems: "center",
              listStyle: "none",
            }}
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>

            <li>
              <NavLink to="/team">Team</NavLink>
            </li>
          </ul>
        </nav>
        <div style={{ padding: "1rem" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
