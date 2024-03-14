import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./component/home";
import Contact from "./component/contact";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Gallery from "./component/gallery";
import NotFound from "./component/notFound";
import AboutPageLayout from "./component/AboutPageLayout";
import Team from "./component/team";
import TeamPageLayout from "./component/TeamPageLayout";
import MainPageLayout from "./component/MainPageLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPageLayout />}>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<AboutPageLayout />}>
        <Route
          // when i want a page to render automatically
          // index
          path="history"
          element={
            <div style={{ padding: "1rem 1.5rem" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam <br />
              molestiae ipsam saepe unde voluptate aliquid iure aut laboriosam
              qui doloribus. <br />
              Aliquam minus numquam reprehenderit quidem non fugit.
              Reprehenderit, pariatur veritatis!
            </div>
          }
        />
        <Route
          path="mission"
          element={
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Natus repellat dolores iusto minima modi deserunt nobis dolore
              odio sapiente, expedit <br />a non libero necessitatibus beatae
              at. Eligendi suscipit sed maxime perferendis!
            </div>
          }
        />
      </Route>

      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/team" element={<TeamPageLayout />}>
        <Route index element={<Team />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
