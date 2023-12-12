import { ReactNode, createContext } from "react"


interface AppContext {
    isFirstRender?:boolean
}

interface AppContextProps extends AppContext {
    children: ReactNode
}

export const AppContext = createContext<AppContext>({})


export const AppContextProvider = ({children, ...contrext}: AppContextProps) => {
    return (
        <AppContext.Provider value={contrext}>{children}</AppContext.Provider>
    )
}
