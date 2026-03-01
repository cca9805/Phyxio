import React from "react";
import CollisionGraphsCoordBase from "./CollisionGraphsCoordBase";

export default function ColisionesElasticasGraphsCoord(props) {
  return <CollisionGraphsCoordBase {...props} type="elastic" title={props?.title || "Colisiones elasticas (Coord)"} />;
}

