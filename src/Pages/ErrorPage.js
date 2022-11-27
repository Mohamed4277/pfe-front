import React from "react";
import { useLocation} from "react-router-dom";


function ErrorPage() {
    let location = useLocation();
  
    return (
      <div className="container">
        <h1>
          Erreur: Page inexistante ou non authorisée <code>{location.pathname}</code>
        </h1>
      </div>
    );
  }

export default ErrorPage;