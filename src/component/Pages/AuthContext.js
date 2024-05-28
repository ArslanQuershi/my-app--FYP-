import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [IsloggedIn, setIsLoggedIn] = useState(false);

    console.log('IsloggedIn',IsloggedIn);

    return (
        <AuthContext.Provider value={{ IsloggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;