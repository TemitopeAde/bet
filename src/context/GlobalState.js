import React, {createContext, useReducer} from "react";
import { useContext } from "react";
import reducer from "./AppReducer";

const initial = {
    rooms: [
        {id: 1, img: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80", price: 300, type: "Family Deluxe"},
        {id: 2, img: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80", price: 400, type: "Single Deluxe" },
        {id: 3, img: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80", price: 250, type: "Family Deluxe" }
    ]
}

const AppContext = createContext(initial)

export const AppProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initial)

    return(
        <AppContext.Provider
            value={{
                ...state
            }}

        >
            {children}
            
        </AppContext.Provider>
    )
} 

export const useGlobalContext = () => {
    return useContext(AppContext, AppProvider)
}