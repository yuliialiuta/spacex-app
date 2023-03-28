import React from "react";
import Header from "../Organisms/header";
import styled from "styled-components";
import Img from "../../pics/image1.png";

const Background = styled.div`  
background:  linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Img});
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 95%;
}
`;

const HomePage: React.FC = () => {
  return (
    <Background>
      <div>
        <Header />
      </div>

      {/* <MainScreen/>
      <Cards /> */}
    </Background>
  );
};

export default HomePage;
