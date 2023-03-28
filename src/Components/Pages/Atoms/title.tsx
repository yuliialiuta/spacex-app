import React from "react";
import styled from "styled-components";

const TitleText = styled.div`
  position: absolute;
  top: 30%;
  left: 0%;
  color: #fff;
`;

const Space = styled.h1`
  font-family: "Syne";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 58px;
  text-transform: uppercase;
  text-align: center;
`;

const You = styled.span`
  font-family: "Syne";
  font-size: 310px;
  line-height: 250px;
`;

const Title: React.FC = () => {
  return (
    <TitleText>
      <Space>
        The space is waiting for <You>you</You>
      </Space>
    </TitleText>
  );
};

export default Title;
