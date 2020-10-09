import React from "react";
import { Route as Rota } from "react-router-dom";
import Principal from "../../Componentes/Layouts/Principal";

// import { Container } from './styles';

function Route(props) {
  return (
    <Principal>
      <Rota {...props} />
    </Principal>
  );
}

export default Route;
