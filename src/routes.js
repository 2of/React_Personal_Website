import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import RamblesPage from "./pages/Rambles";
import ProjPage from "./pages/Projects";

const routes = [
  { path: "/", element: <HomePage />, navtype: "compact", showInMainNav: true, displayName: "Home" }, // Root route uses 'compact' navtype
  { path: "/home", element: <HomePage />, navtype: "compact", showInMainNav: false, displayName: "Home" },
  { path: "/about", element: <AboutPage />, navtype: "wide", showInMainNav: true, displayName: "About" },
  { path: "/projects", element: <ProjPage />, navtype: "center", showInMainNav: true, displayName: "Projects" },
  { path: "/contact", element: <ContactPage />, navtype: "compact", showInMainNav: true, displayName: "Contact" },
  { path: "/fun", element: <RamblesPage />, navtype: "wide", showInMainNav: false, displayName: "Fun" },
  { path: "/fun", element: <RamblesPage />, navtype: "wide", showInMainNav: true, displayName: "Rambling" },
];

export default routes;
