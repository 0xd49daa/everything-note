import React, { useReducer, useMemo } from "react"
import MainViewContext from "../MainViewContext"

export default function withReducer(reducer, initState) {
    return (Component) => {
        return function WithReducer(props) {
            const [state, dispatch] = useReducer(reducer, initState)

            const contextValue = useMemo(() => [state, dispatch], [state, dispatch])

            return <MainViewContext.Provider value={contextValue}>
                <Component {...props} />
            </MainViewContext.Provider>
        }
    }
}