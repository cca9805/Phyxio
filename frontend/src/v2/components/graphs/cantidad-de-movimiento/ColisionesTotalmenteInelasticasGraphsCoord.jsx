import React from "react";
import CollisionGraphsCoordBase from "./CollisionGraphsCoordBase";

export default function ColisionesTotalmenteInelasticasGraphsCoord(props) {
  return <CollisionGraphsCoordBase {...props} type="tot" title={props?.title || "Colisiones totalmente inelasticas (Coord)"} />;
}

