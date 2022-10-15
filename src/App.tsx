import React from "react";
import routes from "./routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((item) => {
            return <Route path={item.path} element={item.element} />;
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
