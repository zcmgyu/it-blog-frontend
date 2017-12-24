import { combineReducers } from 'redux'
import authReducer from './authentication'
import dialog from './dialog'
import post from './post'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducers = combineReducers({
    form: reduxFormReducer,
    router: routerReducer,
    authReducer,
    dialog,
    post
})

export default rootReducers