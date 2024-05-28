
import React, { createContext, useState } from 'react';


const UserContext = createContext();


const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState(0);

    console.log('user_id',userId);

    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
