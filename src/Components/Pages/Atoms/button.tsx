import React from "react";
import styled from "styled-components";
// import * as Img from "../../pics/heart.png";

const Btn = styled.button`
  background-color: #d3eaff;
  font-family: "Syne";
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  padding: 5px 20px;
  border: none;
  margin: 0 10px;
`;

const FavBtn = styled(Btn)`
  background: #ececec;
  padding: 5px 10px;
`;

const Button: React.FC = () => {
  return (
    <div>
      <FavBtn>
        <img src={require("../../pics/heart.png")} alt="heart" />
      </FavBtn>
      <Btn>sign in</Btn>
    </div>
  );
};

export default Button;
