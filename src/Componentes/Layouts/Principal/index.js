import React from "react";
import { FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Container, Header, Footer, Main } from "./styles";

function Principal({ children }) {
  return (
    <Container>
      <Header>
        <Link className="Logo" to="/">
          <FaSpotify />
          Spotify
        </Link>
        <div>
          <Link to="/faq">Faq</Link>
        </div>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <div>&copy;{new Date().getUTCFullYear()} Spotify AB</div>
      </Footer>
    </Container>
  );
}

export default Principal;
