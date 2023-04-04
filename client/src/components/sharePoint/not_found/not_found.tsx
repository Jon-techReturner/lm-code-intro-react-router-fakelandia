import './not_found.css';
const NotFound: React.FC = () => {
    return (
      <>
      <div className="error_container">
          <h2 className="error__header">Error 404</h2>
          <div className="error__text">Page not found</div>
          <div className="error__text">(Sorry about that)</div>
      </div>
        
      </>
    );
  };
  
  export default NotFound;