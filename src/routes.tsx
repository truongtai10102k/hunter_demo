import { About, Home, Service, Contract } from "./pages";

const routes = [
  { path: "", element: <Home /> },
  { path: "about", element: <About /> },
  { path: "service", element: <Service /> },
  { path: "contract", element: <Contract /> },
];

export default routes;
