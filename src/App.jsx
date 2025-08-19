import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./compo/Login";
import Home from "./compo/Home";
import Nav from "./compo/Nav";
import Work1 from "./compo_work/work1/Work1"
import Work2 from "./compo_work/work2/Work2"
import Work3 from "./compo_work/work3/Work3"
import Work4 from "./compo_work/work4/Work4"
import MainContent from "./compo/MainContent"

function App() {

  return (
    <>
      <h1>과제방 : 김지수</h1>
      <Router>
        {/* <Header /> */}
        <Nav />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/react-site/login" element={<Login />} />
            <Route path="/react-site/work1" element={<Work1 />} />
            <Route path="/react-site/work2" element={<Work2 />} />
            <Route path="/react-site/work3" element={<Work3 />} />
            <Route path="/react-site/work4/*" element={<Work4 />} />
          </Routes>
        </MainContent>
        {/* <Footer /> */}
      </Router >
    </>
  );
}

export default App;