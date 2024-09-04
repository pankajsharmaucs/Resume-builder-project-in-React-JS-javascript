import React, { useState, useEffect } from 'react'
import { Navigate } from "react-router-dom";


function Edit() {

  const [authenticated, setauthenticated] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    const token = localStorage.getItem("token");
    if (loggedInUser && token) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {

      return <Navigate replace to="/signUp" />;

  }
  else {

    return (
      <div>
        <h1>Edit Page</h1>
      </div>
    )

  }


}

export default Edit
