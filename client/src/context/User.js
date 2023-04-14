import React, { createContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap"

const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [id, setID] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        fetch('/user')
        .then((r) => {
            if(r.ok) {
                r.json().then((user) => setUser(user))
            }
        })
    }, [])

        const displayErrors = (errors, errorKey = null) => {
        return errors.map((error) => {
            if (errorKey === "password" && error === "is invalid") {
                error = "Sorry, your password is invalid. Your password must be at least 8 characters, contain at least one digit, at least one lowercase letter, one uppercase letter, and one special character (! @ # $ % ^ &)"
            } else if (errorKey === "email" && error === "is invalid") {
                error = "Please follow typical email formatting: joe@email.com"
            } else if (errorKey === "password" && (error === "can't be blank" || error === "is too short (minimum is 8 characters)")) {
                return null
            }
            return ( 
            <Form.Control.Feedback type="invalid">
            {error}
            </Form.Control.Feedback>
            );
        })
    }

    return <UserContext.Provider value={{user, setUser, setID, id, displayErrors, loggedIn, setLoggedIn }}>{children}</UserContext.Provider>;
}

export { UserProvider, UserContext }