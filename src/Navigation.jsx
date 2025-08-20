import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color:  #657054ff;
  // outline-width: thin;
  padding: 0.5rem 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  color: white;
  font-size: 1.8em;
  text-decoration: none;
  padding: 0.5rem;
  display: block;

  &:hover {
    // background-color: #cadc43ff;
    outline: 1px solid red;
    // outline-bottom: 3px solid green;
    
  }
`;

const DropdownMenu = styled.ul`
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  width:160px;
  background-color: #657054ff;
  padding: 0;
  margin: 0;

  max-height: 0;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;

  transition: max-height 0.5s ease, opacity 0.5s ease, visibility 0.5s ease;

  ${NavItem}:hover & {
    max-height: 500px;
    opacity: 1;
     outline: 1px solid red;
    visibility: visible;
  }
`;

const DropdownItem = styled.li``;

const DropdownLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: block;

  &:hover {
    background-color: #555;
  }
`;

const Navigation = () => {
  return (
    <div>
      {/* <h2>REACT</h2>
      <nav>
        <div className="tab-navigation">
          <a href="https://kjs-alt.github.io/html2507/" className="tab-link">HTML</a>
          <a href="https://kjs-alt.github.io/js2507/" className="tab-link">JS</a>
          <a href="https://kjs-alt.github.io/test2508/" className="tab-link">TEST</a>
          <a href="https://kjs-alt.github.io/react-site/" className="tab-link">REACT</a>
        </div>
      </nav> */}

      <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/">과제방 홈</NavLink>
          <DropdownMenu>
            <DropdownItem>
              <DropdownLink to={"/chapter7"}>Chapter7</DropdownLink>
              <DropdownLink to={"/chapter8"}>Chapter8</DropdownLink>
              <DropdownLink to={"/chapter9"}>Chapter9</DropdownLink>
              <DropdownLink to={"/chapter10"}>Chapter10</DropdownLink>
              <DropdownLink to={"/chapter11"}>Chapter11</DropdownLink>
              <DropdownLink to={"/chapter12"}>Chapter12</DropdownLink>
            </DropdownItem>
          </DropdownMenu>
        </NavItem>
        <NavItem>
          <NavLink to="/hook">훅</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/miniblog">미니블로그</NavLink>
          {/* <DropdownMenu>
            <DropdownItem>
              <DropdownLink to="/miniblog/post-write">쓰기</DropdownLink>
            </DropdownItem>
            <DropdownItem>
              <DropdownLink to="/miniblog/post/:postId">보기</DropdownLink>
            </DropdownItem>
          </DropdownMenu> */}
        </NavItem>
        <NavItem>
          <NavLink to="/contact">문의하기</NavLink>
        </NavItem>
      </NavList>
    </Nav>
    </div>
  );
}
export default Navigation;