import React from "react";
import NavBar from "./components/NavBar";
import AddApplicant from "./components/AddApplicant";
import ViewApplicant from "./components/ViewApplicant";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {" "}
      <h1 className="text-center">
        {" "}
        Hostel Application System{" "}
      </h1> <NavBar />{" "}
      <Routes>
        {" "}
        <Route path="/hostelApplicants" element={<AddApplicant />}>
          {" "}
        </Route>{" "}
        <Route path="/viewApplicants" element={<ViewApplicant />}>
          {" "}
        </Route>{" "}
      </Routes>{" "}
    </div>
  );
}

export default App;
