import userEvent from "@testing-library/user-event";
import React, { useContext, useReducer } from "react";

const FlagContext = React.createContext();
const FlagContextDispatcher = React.createContext();


const reducer = (state , action) =>{
    if(action.type==="change")
        return !state;
}

const FlagProvider = ({children}) => {
    const [flag, dispatch] = useReducer(reducer, false);

    return (
    <FlagContext.Provider value={flag} >
        <FlagContextDispatcher.Provider value={dispatch}>
            {children}
        </FlagContextDispatcher.Provider>
    </FlagContext.Provider>
    )
}

export default FlagProvider;
export const useFlag = () => useContext(FlagContext)
export const useFlagAction = () => useContext(FlagContextDispatcher)
