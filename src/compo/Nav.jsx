import { Link } from "react-router-dom";
import "./css/Nav.css"

const Nav = () => {
  return (
    <div>
      <h2>REACT</h2>
      <nav>
        <div className="tab-navigation">
          <a href="https://kjs-alt.github.io/html2507/" className="tab-link">HTML</a>
          <a href="https://kjs-alt.github.io/js2507/" className="tab-link">JS</a>
          <a href="https://kjs-alt.github.io/test2508/" className="tab-link">TEST</a>
          <a href="https://kjs-alt.github.io/react-site/" className="tab-link">REACT</a>
        </div>
      </nav>

      <nav>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/react-site/login">Login</Link>
          </li>
          <li>
            <Link to="/react-site/work1">Work1_0812</Link>
          </li>
          <li>
            <Link to="/react-site/work2">Work2_0813</Link>
          </li>
          <li>
            <Link to="/react-site/work3">Work3_0814</Link>
          </li>
          <li>
            <Link to="/react-site/work4">소플의 미니 블로그</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;