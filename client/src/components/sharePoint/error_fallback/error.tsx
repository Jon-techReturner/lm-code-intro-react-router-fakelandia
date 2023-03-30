interface ErrorFallbackProps {
    error: Error;
  }
  
  const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
    return (
      <>
        <div className="fallback__error">
            <h1>Something Went Wrong</h1>
            <div>Error: {error.message}</div>
            <div>(Sorry about that)</div>
        </div>
        
      </>
    );
  };
  
  export default ErrorFallback;