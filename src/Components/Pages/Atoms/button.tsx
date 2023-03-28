import React from "react";
import styled from "styled-components";
// import * as Img from "../../pics/heart.png";

const Btn = styled.a`
  background-color: #d3eaff;
  font-family: "Syne";
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  padding: 5px 20px;
  border: none;
  margin: 0 10px;

  :hover {
    color: #fff;
    background-color: gray;
  }
`;

const FavBtn = styled(Btn)`
  background: #ececec;
  padding: 5px 10px;

  :hover {
    background-color: #d3eaff;
  }
`;

const Button: React.FC = () => {
  return (
    <div>
      <FavBtn href="/favourites">
        <img src={require("../../pics/heart.png")} alt="heart" />
      </FavBtn>
      <Btn href="/">sign in</Btn>
    </div>
  );
};

export default Button;
