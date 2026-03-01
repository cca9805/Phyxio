import React from "react";
import CollisionGraphsDclBase from "./CollisionGraphsDclBase";

export default function ColisionesElasticasGraphsDcl(props) {
  return <CollisionGraphsDclBase {...props} type="elastic" title={props?.title || "Colisiones elasticas (DCL)"} />;
}

