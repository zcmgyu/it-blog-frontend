// For SAGAS
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducers from '../reducers'
import rootSaga from '../sagas'
import history from './history'
// FOR react-router-redux
import { routerMiddleware } from 'react-router-redux'
import _ from 'lodash'
import { saveState, loadState } from '../connectivity/localStorage'


export default function createStoreWithMiddleware() {
    // Load state from localStorage
    const persistentState = loadState()

    //Saga
    const sagaMiddleware = createSagaMiddleware()
    // React-router-redux
    // Create a history of your choosing (we're using a browser history in this case)
    // Build the middleware for intercepting and dispatching navigation actions
    const routerMid = routerMiddleware(history)



    const middlewares = [sagaMiddleware, routerMid]
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(
        rootReducers,
        persistentState,
        composeEnhancers(
            applyMiddleware(...middlewares),
            // other store enhancers if any
        )
    )


    store.subscribe(_.throttle(() => {
        const {auth, user} = store.getState()
        saveState({
            auth,
            user
        })
    }, 1000))

    sagaMiddleware.run(rootSaga)

    return store
}