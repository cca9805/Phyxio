import React from "react";
import CollisionGraphsDclBase from "./CollisionGraphsDclBase";

export default function ColisionesTotalmenteInelasticasGraphsDcl(props) {
  return <CollisionGraphsDclBase {...props} type="tot" title={props?.title || "Colisiones totalmente inelasticas (DCL)"} />;
}

