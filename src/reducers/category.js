import { CATEGORY } from '../actiontypes/category'

const initialState = {
    categories: []
}

const category = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY.SUCCESS: {
            return {
                ...state,
                categories: action.response.data.result.data
            }
        }
        case CATEGORY.FAILURE: {
            return {
                categories: []
            }
        }
        default: {
            return state
        }
    }
}

export default category