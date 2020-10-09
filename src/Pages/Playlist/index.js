import React from "react";
import Musica from "../../Api/Musica";

import { Container } from "./styles";

function Playlist() {
  const [musica, setMusica] = React.useState(
    new Musica({ nome: "Hurt", banda: "Johnny Cash", file: { JohnnyCash_Hurt: true } })
  );

  return (
    <Container>
      <h1>
        {musica.nome} de {musica.banda}
      </h1>
      <audio controls src={musica.file} />
    </Container>
  );
}

export default Playlist;
