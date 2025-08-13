import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
// import { useState } from "react";
import "./App.css";
import Login from "./compo/Login";
import Home from "./compo/Home";
import Layout from "./compo/Layout";
import Work1 from "./compo_work/work1/Work1"
import Work2 from "./compo_work/work2/Work2"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>과제방 : 김지수</h1>
      <Router>
        <Routes>
          <Route path="/react-site/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/react-site/login" element={<Login />} />
          <Route path="/react-site/work1" element={<Work1 />} />
          <Route path="/react-site/work2" element={<Work2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;