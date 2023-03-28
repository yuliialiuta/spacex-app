import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowImg } from "../../pics/arrow.svg";

const ExploreBlock = styled.a`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  top: 90%;
  left: 43%;
  text-decoration: none;
  color: #fff;
`;

const Explore = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 38px;
  padding: 0 10px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ExploreSign: React.FC = () => {
  return (
    <ExploreBlock href="/">
      <Explore>Explore tours</Explore>
      <ArrowImg />
    </ExploreBlock>
  );
};

export default ExploreSign;
