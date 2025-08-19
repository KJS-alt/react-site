import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./compo/Login";
import Home from "./compo/Home";
import Layout from "./compo/Layout";
import Work1 from "./compo_work/work1/Work1"
import Work2 from "./compo_work/work2/Work2"
import Work3 from "./compo_work/work3/Work3"
import Work4 from "./compo_work/work4/Work4"

function App() {

  return (
    <>
      <h1>과제방 : 김지수</h1>
      <Router>
        <Routes>
          <Route path="/react-site" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="work1" element={<Work1 />} />
            <Route path="work2" element={<Work2 />} />
            <Route path="work3" element={<Work3 />} />
            <Route path="work4/*" element={<Work4 />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;