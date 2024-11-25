import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout"; // Import Layout
import routes from "./routes"; // Import routes
import './App.css';
import BG_Animation from "./components/animatedbg"; // Animated background component

import { ContextProvider, useTheme } from "./contexts/globalcontext"; // Import context and hook

const AppContent = () => {
  const { isDarkMode } = useTheme(); // Access theme state from context

  return (
    <>
      {/* Animated Background */}
      {/* <BG_Animation theme={isDarkMode ? "dark" : "light"} /> Pass theme */}

      {/* App Content */}
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<Layout navtype={route.navtype} />} // Pass navtype to Layout
            >
              <Route path={route.path} element={route.element} />
            </Route>
          ))}
        </Routes>
      </Router>
    </>
  );
};

const App = () => {
  return (
    <ContextProvider>
      <AppContent />
    </ContextProvider>
  );
};

export default App;