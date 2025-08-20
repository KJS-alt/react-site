import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent"
import Navigation from "./Navigation";
import MainPage from './components/pages/MainPage';
import PostViewPage from './components/pages/PostViewPage';
import PostWritePage from './components/pages/PostWritePage';
import Hook from './hook/Hook';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Chapter7 from "./compo_example/chapter7/Chapter7";
import Chapter8 from "./compo_example/chapter8/Chapter8";
import Chapter9 from "./compo_example/chapter9/Chapter9";
import Chapter10 from "./compo_example/chapter10/Chapter10";
import Chapter11 from "./compo_example/chapter11/Chapter11";
import Chapter12 from "./compo_example/chapter12/Chapter12";



function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Navigation />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hook" element={<Hook />} />
            <Route path="/miniblog" element={<MainPage />} />
            <Route path="/post-write" element={<PostWritePage />} />
            <Route path="/post/:postId" element={<PostViewPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chapter7" element={<Chapter7 />} />
            <Route path="/chapter8" element={<Chapter8 />} />
            <Route path="/chapter9" element={<Chapter9 />} />
            <Route path="/chapter10" element={<Chapter10 />} />
            <Route path="/chapter11" element={<Chapter11 />} />
            <Route path="/chapter12" element={<Chapter12 />} />
          </Routes>
        </MainContent>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;