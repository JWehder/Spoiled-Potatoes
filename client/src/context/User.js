import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        fetch('/user')
        .then((r) => {
            if(r.ok) {
                r.json().then((user) => {
                    setUser(user)
                    setLoggedIn(true)
                })
            }
        })
    }, [])
    
    console.log(user)
    return <UserContext.Provider value={{user, setUser, setIsSubmitted, isSubmitted}}>{children}</UserContext.Provider>;
}

export { UserProvider, UserContext }