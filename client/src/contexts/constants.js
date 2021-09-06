export const apiUrl = process.env.Node_ENV !== 'production' ? 'http://localhost:5000/api' : 'somethingUrl'
export const LOCAL_STORAGE_TOKEN_NAME = 'learnIT'

export const POSTS_LOADED_SUCCESS = 'POSTS_LOADED_SUCCESS'
export const POSTS_LOADED_FAIL = 'POSTS_LOADED_FAIL'
export const ADD_POST = 'ADD_POST'