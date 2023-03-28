import React from "react";
import styled from "styled-components";

const NavLink = styled.a`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #fff;
  margin: 5px;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const Navlinks: React.FC = () => {
  return (
    <div>
      <NavLink href="/home">home</NavLink>
      <NavLink href="/">tours</NavLink>
      <NavLink href="/">about</NavLink>
      <NavLink href="/">help</NavLink>
    </div>
  );
};

export default Navlinks;
