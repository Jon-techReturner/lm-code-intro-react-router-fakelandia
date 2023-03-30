import React from 'react';
import './App.css';
import { HashRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Router from "./components/router/router";
import ErrorFallback from "./components/sharePoint/error_fallback/error";

function App() {
  return (
    <>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HashRouter>
          <Router />
        </HashRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
