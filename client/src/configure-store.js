import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as FormReducer } from 'redux-form'

import LoginReducer from './login/reducer'

// create store that has the redux-thunk middleware enabled
const createStoreWidthMiddleware = applyMiddleware(
    thunk
    // add as much as needed middlewares
)(createStore)

// create store with combineReducer
const combinedReducer = combineReducers({
    form: FormReducer,
    Login: LoginReducer
})

export default function ConfigureStore() {
    const store = createStoreWidthMiddleware(combinedReducer)
    return store
}
