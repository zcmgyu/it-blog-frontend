import action from './'
import * as ACT_TYPES from '../actiontypes/search'

export const search = {
    request: payload => action(ACT_TYPES.SEARCH.REQUEST, { payload }),
    success: response => action(ACT_TYPES.SEARCH.SUCCESS, { response }),
    failure: error => action(ACT_TYPES.SEARCH.FAILURE, { error })
}
