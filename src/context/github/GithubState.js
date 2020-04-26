import { GithubContext } from "./GithubContext"
import React, { useReducer } from "react"
import { githubReducer } from "./GithubReducer"
import { SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SET_LOADING } from "../Types"

export const GithubState = ({ children }) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const search = async value => {
        setLoading()

        dispatch({
            type: SEARCH_USERS,
            payload: []
        })
    }

    const getUser = async name => {
        setLoading()

        dispatch({
            type: GET_USER,
            payload: {}
        })
    }

    const clearUsers = () => dispatch({ type: CLEAR_USERS })

    const setLoading = () => dispatch({ type: SET_LOADING })

    const getRepos = async name => {
        setLoading()

        dispatch({
            type: GET_REPOS,
            payload: []
        })
    }

    const {user, users, repos, loading} = state

    return (
        <GithubContext.Provider value={{
            search, setLoading, getRepos, getUser, clearUsers,
            user, users, repos, loading   
        }}>
            {children}
        </GithubContext.Provider>
    )
}