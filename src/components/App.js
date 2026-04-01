
import React, { createContext, useContext, useState } from "react";
import './../styles/App.css';
 const AuthContext=createContext();

const App = () => {
  const [auth,setAuth]=useState(false);
  return (
    <AuthContext.Provider value={auth}>
      <div>
          <h2>Click on the checkbox to get Authenticated.</h2>
         
          <Auth/> <br/><br/>
          <input id="checkbox" type="checkbox" onChange={()=>setAuth(!auth)}/><label htmlFor="checkbox">I'm not a robot</label>
          
      </div>
    </AuthContext.Provider>
  )
}

function Auth(){
  const auth=useContext(AuthContext);
  return(
    <>
      {auth?<p className="authText">You are now authenticated, you can proceed</p>:<p className="authText">you are not authenticated</p>}
    </>
  );
}

export default App
