import { createContext, useContext } from 'react';

const NavCloseContext = createContext<() => void>(() => {});

export const NavCloseProvider = NavCloseContext.Provider;
export const useNavClose = () => useContext(NavCloseContext);