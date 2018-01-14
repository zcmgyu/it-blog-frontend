import action from './'
import { CATEGORY } from '../actiontypes/category'

export const getCategory = {
    request: () => action(CATEGORY.REQUEST),
    success: response => action(CATEGORY.SUCCESS, { response }),
    failure: error => action(CATEGORY.FAILURE, { error })
}