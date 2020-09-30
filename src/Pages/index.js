import React from "react";
import { FaSpotify } from "react-icons/fa";
import Home from "./Home";
import Faq from "./Faq";

import { Container, Header, Footer, Main } from "./styles";

function Pages({ children }) {
  const [isHome, setIsHome] = React.useState(true);

  return (
    <Container>
      <Header>
        <div className="Logo">
          <FaSpotify />
          Spotify
        </div>
        <h3 className="refLink" onClick={() => setIsHome(!isHome)}>
          {isHome ? "Faq" : "Home"}
        </h3>
      </Header>
      <Main>{isHome ? <Home /> : <Faq />}</Main>
      <Footer>
        <div>&copy;{new Date().getUTCFullYear()} Spotify AB</div>
      </Footer>
    </Container>
  );
}

export default Pages;
