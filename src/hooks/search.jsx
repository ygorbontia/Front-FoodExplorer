import { createContext, useContext, useState } from 'react';

import { api } from '../services/api'

export const SearchContext = createContext({});

function SearchProvider({ children }) {
  const [ search, setSearch ] = useState("");

  function ingredientsSearch(dishName) {
    setSearch(dishName)

    if (window.location.href !== api.defaults.baseUrl) {
      
    }
  }
  
  return (
    <SearchContext.Provider value={{ ingredientsSearch, search }}>
      { children }
    </SearchContext.Provider>
  )
}

function useSearch() {
  const context = useContext(SearchContext);

  return context;
}

export { SearchProvider, useSearch }