import React, { useContext, useState } from 'react';

const AppContext = React.createContext({
    navHeaderPosition: 'fixed',
});

const AppProvider = ({ children }) => {
    const [navHeaderPosition, setNavHeaderPosition] = useState('fixed');

    const handleNavHeaderPosition = position => {
        setNavHeaderPosition(position);
    };

    return (
        <AppContext.Provider value={{ navHeaderPosition, handleNavHeaderPosition }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
