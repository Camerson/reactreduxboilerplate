import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const initialState = {
    counter: 0
}


const persistConfig = {
    key: 'root',
    storage,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREASE_COUNT':
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state
    }
}

const persistedReducer = persistReducer(persistConfig, reducer)



export default () => {
    let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware()))
    let persistor = persistStore(store)
    return { store, persistor }
}

// const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware()))
// export default store;
