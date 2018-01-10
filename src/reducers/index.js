import { combineReducers } from 'redux'
import auth from './authenticate'
import dialog from './dialog'
import post from './post'
import user from './user'
import error from './error'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducers = combineReducers({
    form: reduxFormReducer,
    router: routerReducer,
    error,
    auth,
    dialog,
    post,
    user
})

export default rootReducers