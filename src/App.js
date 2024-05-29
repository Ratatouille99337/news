import React from "react";

// ############  route-start  ################
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import News from "./components/pages/News";
import Dashboard from "./components/pages/Dashboard";
// ############  route-end  ################

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/news" exact element={<News />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
