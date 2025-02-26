import { createContext, useContext, useState, ReactNode } from "react";

interface User {
    token: string;
    username: string;
    image: string;
}

interface GlobalContextType {
    globalState: {
        user: User;
    };
    isLoggedIn: () => boolean;
    logout: () => void;
    setUser: (user: User) => void;
}

const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
    const [globalState, setGlobalState] = useState({
        user: { token: "", username: "", image: "" },
    });

    // ✅ Always use function version of `setState` to prevent stale state issues
    const setUser = (user: User) => {
        setGlobalState((prev) => ({
            ...prev,
            user,
        }));
    };

    const isLoggedIn = () => globalState.user.token !== "";

    const logout = () => {
        setGlobalState((prev) => ({
            ...prev,
            user: { token: "", username: "", image: "" },
        }));
    };

    return (
        <GlobalContext.Provider value={{ globalState, isLoggedIn, logout, setUser }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) throw new Error("useGlobalContext must be used within GlobalContextProvider");
    return context;
};