import React from "react";
import Logo from "../Atoms/logo";
import Navlinks from "../Atoms/navlinks";
import Button from "../Atoms/button";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1e1e1e7a;
  padding: 15px 50px;
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Logo />
      <Navlinks />
      <Button />
    </Nav>
  );
};

export default Navbar;
