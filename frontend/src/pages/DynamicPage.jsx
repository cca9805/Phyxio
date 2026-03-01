import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function DynamicPage() {
  const location = useLocation();

  // Legacy V1 entrypoint: redirect everything to V2 to avoid old data dependencies.
  if (location.pathname === '/fisica' || location.pathname === '/') {
    return <Navigate to="/v2" replace />;
  }

  return <Navigate to="/v2" replace />;
}
