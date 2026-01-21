import React, { useState } from 'react'
import { createContext } from 'react'

export const SearchContext = createContext();

export function SearchProvider({ children }) {

    const [searchText, setSearchText] = useState("");

    return (
        <SearchContext.Provider value={{ searchText, setSearchText }}>
            {children}
        </SearchContext.Provider>
    );
}
