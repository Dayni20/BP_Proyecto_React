import { Navigate } from "react-router-dom";
import useUser from "./User";

export default function RoutePrivate({children}) {
    //tofo:contexto apirest hook
    const {user}=useUser;
    if (!user){
        return<Navigate to ="/login" replace="true"/>
    }
    return 
        <>
{children}
</>
    
}