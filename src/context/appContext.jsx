import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = (props) => {

    const[navlinks, setNavlinks] = useState([
        "About",
        "Skills",
        "Experience",
        "Contact Me"
    ]);

    return (
        <DataContext.Provider value={{navlinks}}>
            {
                props.children
            }
        </DataContext.Provider>
    )
}