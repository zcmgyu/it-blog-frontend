import { combineReducers } from 'redux'
import auth from './authenticate'
import dialog from './dialog'
import post from './post'
import user from './user'
import error from './error'
import category from './category'
import search from './search'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form'

const rootReducers = combineReducers({
    form: reduxFormReducer,
    router: routerReducer,
    error,
    auth,
    dialog,
    post,
    user,
    category,
    search
})

export default rootReducers