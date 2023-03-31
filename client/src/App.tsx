<<<<<<< HEAD
import { HashRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
=======
import React from 'react';
import './App.css';
import { HashRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
>>>>>>> 5b3d5582e219d800b90dc00273459ca57089f617
import Router from "./components/router/router";
import ErrorFallback from "./components/sharePoint/error_fallback/error";

function App() {
  return (
    <>
<<<<<<< HEAD
      <ErrorBoundary FallbackComponent={ErrorFallback}>
=======
    <ErrorBoundary FallbackComponent={ErrorFallback}>
>>>>>>> 5b3d5582e219d800b90dc00273459ca57089f617
        <HashRouter>
          <Router />
        </HashRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;