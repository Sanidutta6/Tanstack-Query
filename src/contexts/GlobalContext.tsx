import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

interface GlobalContextType {
    globalState: {
        user: {
            token?: string;
            username?: string;
            image?: string;
        };
    };
    isLoggedIn: () => boolean;
    logout: () => void;
    setUser: (user: any) => void;
}

const GlobalContext = createContext<GlobalContextType | null>(null);


export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
    const [globalState, setGlobalState] = useState({
        user: {
            token: '',
            username: '',
            image: ''
        }
    });

    const isLoggedIn = () => {
        return globalState.user.token !== ""
    }

    const setUser = (user: { token: string, username: string, image: string }) => {
        setGlobalState({ ...globalState, user })
    }

    const logout = () => {
        setGlobalState({ ...globalState, user: { token: "", username: "", image: "" } })
    }

    return <GlobalContext.Provider value={{ globalState, isLoggedIn, logout, setUser }}>{children}</GlobalContext.Provider>
}

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);

    if (!context) throw new Error("useGlobalContext must be used within GlobalContextProvider");

    return context;
}