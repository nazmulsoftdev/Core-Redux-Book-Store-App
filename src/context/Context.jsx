import React,{createContext,useState} from 'react';

export const ContextAPI = createContext();



export const ContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const SearchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <ContextAPI.Provider value={{ search: search, SearchHandler }}>
      {children}
    </ContextAPI.Provider>
  );
};


