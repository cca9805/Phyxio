import React from "react";
import CollisionGraphsDclBase from "./CollisionGraphsDclBase";

export default function ColisionesInelasticasGraphsDcl(props) {
  return <CollisionGraphsDclBase {...props} type="inelastic" title={props?.title || "Colisiones inelasticas (DCL)"} />;
}

