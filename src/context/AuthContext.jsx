import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,onAuthStateChanged
} from "firebase/auth"


const AuthContext = createContext()

export function AuthContextProvider ({children}) {

    const [user,setUser] = useState({})

    function singUp(email,passowrd){
        return createUserWithEmailAndPassword(auth,email,passowrd)
    }

    function logIn (){
        return signInWithEmailAndPassword(auth,email,passowrd)
    }

    function logOut (){
        return singOut(auth)
    }

    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsuscribe
        }
    },[])

    return (
        <AuthContext.Provider value={{singUp, logIn, logOut, user}}>  
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth () {
    return useContext(AuthContext); 
}