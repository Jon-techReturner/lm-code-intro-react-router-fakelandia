import { HashRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
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