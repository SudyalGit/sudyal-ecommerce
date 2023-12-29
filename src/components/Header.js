import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './Navbar';
import logo from '../shopfusion.png';

const Header = () => {
    return (
        <>
            <MainHeader>

                <NavLink className='logo-box' to="/">
                    <img src={logo} alt="logo" className="logo" />
                </NavLink>
                
                <Navbar />
                
            </MainHeader>
        </>
    )
}

const MainHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.headerBg};
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  height: 5rem;
  padding: 0 3%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo-box {
    height: 3rem;
  }
  .logo {
    height: 100%;
  }
`;

export default Header;