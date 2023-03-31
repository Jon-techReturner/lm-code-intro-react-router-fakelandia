import './not_found.css';
const NotFound: React.FC = () => {
    return (
      <>
      <div className="error_container">
          <h2 className="pageHeading">Error 404</h2>
          <div className="pageText">Page not found</div>
          <div className="pageText">(Sorry about that)</div>
      </div>
        
      </>
    );
  };
  
  export default NotFound;