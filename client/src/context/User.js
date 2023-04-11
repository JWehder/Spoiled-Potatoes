import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [id, setID] = useState(null)

    useEffect(() => {
        fetch('/user')
        .then((r) => {
            if(r.ok) {
                r.json().then((user) => setUser(user))
            }
        })
    }, [])

    return <UserContext.Provider value={{user, setUser, setID, id }}>{children}</UserContext.Provider>;
}

export { UserProvider, UserContext }