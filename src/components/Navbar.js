import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {

  return (
    <Nav className="menu">

      <input type="checkbox" id="checkbox-toggle" />
      <label htmlFor="checkbox-toggle" className="hamburger">
        ☰
      </label>

      <ul className="nav">
        <li className="nav-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/products">Products</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="nav-link cart-link">
          <NavLink to="/cart">
            <img
              className="cart-img"
              src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png"
              alt=""
            />
            <span className="cart-count">1</span></NavLink>
        </li>
      </ul>
    </Nav>
  );
}

const Nav = styled.div`
  /* Hamburger */
  input[type="checkbox"] {
    display: none;
  }
  .hamburger {
    display: none;
  }

  /* Navbar */
  .nav {
    font-size: 1.2rem;
    text-transform: uppercase;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    .cart-link{
      position: relative;

      .cart-img {
        height: 2.5rem;
      }
      .cart-count{
        background-color: white;
        height: 1.5rem;
        width: 1.5rem;
        position: absolute;
        border-radius: 50%;
        border: 2px solid black;
        top: -20%;
        left: 65%;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  /* for css for Mobile */
  @media (max-width: 768px) {
    .hamburger {
      display: block;
      font-size: 2rem;
      font-weight: 900;
    }

    .nav {
      margin-top: 1rem;
      border-bottom: 2px solid rgba(0, 0, 0, 0.2);
      background-color: ${({ theme }) => theme.colors.headerBg};
      display: none;
      position: absolute;
      right: 0;
      left: 0;
      text-align: center;
      padding: 2rem 0;
    }
    .nav li + li {
      margin-top: 1rem;
    }

    input[type="checkbox"]:checked ~ .nav {
      display: block;

      .cart-link{
        display: inline-block;
      }
    }
  }
`;

export default Navbar;