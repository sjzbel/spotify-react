import React from "react";

import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <h1>Spotify tem de tudo, até os muppets tocando Bohemya Rhapsody!</h1>
      <div className="video">
        <iframe
          title="Bohemya Rhapsody"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        />
      </div>
      <div className="descricao-Spotify">
        O Spotify é um serviço de streaming digital que dá acesso instantâneo a milhões de
        músicas, podcasts, vídeos e outros conteúdos de artistas de todo o mundo. Suas
        funções básicas são gratuitas, como a reprodução de músicas, mas você também pode
        fazer upgrade para o Spotify Premium, está disponível para vários dispositivos,
        incluindo computadores, celulares, tablets, alto-falantes, TVs e carros. Além
        disso, é muito fácil passar de um dispositivo a outro com o Spotify Connect.
      </div>
    </Container>
  );
}

export default Home;
