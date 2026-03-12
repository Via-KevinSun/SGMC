import React, { useContext } from "react";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { AuthContext } from "../contexts/AuthContext";
function Routes(){
    const { isAuthenticated } = useContext(AuthContext);
    const { loadingAuth } = useContext(AuthContext)

    if(loadingAuth){
        return(
            <div>
                <h1>Espere...</h1>
            </div>
        )
    }
    return (
        <div>
            {
            isAuthenticated ? (<AppRoutes/>) : (<AuthRoutes/>)
            }
        </div>
    )

}
export default Routes;