import React, { createContext, useContext, useState } from 'react'


type Theme = 'light' | 'dark'

interface ThemeProps {
    theme: Theme,
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeProps | undefined>(null);

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if(context === undefined){
        throw new Error('useContext must be used whithin a Theme context');
    }

    return context;
};


interface ThemeProviderProps {
    children: React.ReactNode
}

export const ThemeProvider : React.FC<ThemeProviderProps> = ({children}) => {

    const [theme , setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

    return <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
};
