import React from "react";
import Title from "../Atoms/title";
import ExploreSign from "../Atoms/exploreSign";
import Img from "../../pics/image1.png";

import styled from "styled-components";

const Main = styled.div``;

const MainPage: React.FC = () => {
  return (
    <Main>
      <Title />
      <ExploreSign />
    </Main>
  );
};

export default MainPage;
