import { combineReducers } from 'redux'
import authReducer from './authentication'
import dialog from './dialog'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form';


// export { authReducer } 


const rootReducers = combineReducers({
    form: reduxFormReducer,
    router: routerReducer,
    authReducer,
    dialog
})

export default rootReducers