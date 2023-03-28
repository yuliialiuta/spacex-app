import React from "react";
import Navbar from "../Molecules/navbar";
import MainPage from "../Molecules/mainPage";
import styled from "styled-components";

// import Img from "../../pics/image1.png";

const Page = styled.div`
  height: 100vh;
`;

const Header: React.FC = () => {
  return (
    <Page>
      <Navbar />
      <MainPage />
    </Page>
  );
};

export default Header;
