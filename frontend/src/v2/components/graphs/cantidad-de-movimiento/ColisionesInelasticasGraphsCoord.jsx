import React from "react";
import CollisionGraphsCoordBase from "./CollisionGraphsCoordBase";

export default function ColisionesInelasticasGraphsCoord(props) {
  return <CollisionGraphsCoordBase {...props} type="inelastic" title={props?.title || "Colisiones inelasticas (Coord)"} />;
}

