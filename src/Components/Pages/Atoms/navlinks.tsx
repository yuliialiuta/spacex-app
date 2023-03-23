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
`;

const Navlinks: React.FC = () => {
  return (
    <div>
      <NavLink href="/home">home</NavLink>
      <NavLink href="/home">tours</NavLink>
      <NavLink href="/home">about</NavLink>
      <NavLink href="/home">help</NavLink>
    </div>
  );
};

export default Navlinks;
