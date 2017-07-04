import {
    REQUEST_BEGIN,
    REQUEST_SUCCESS,
    REQUEST_FAILED
} from './actions-types'

const initialState = {
    errors: null,
    isFetching: false,
    user: null,
}

export default (state = initialState, action) => {
    switch (action.type) {

        case REQUEST_BEGIN:
            return {
                ...state,
                isFetching: true
            }
        case REQUEST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                user: action.payload
            }
        case REQUEST_FAILED:
            return {
                ...state,
                isFetching: false,
                errors: action.payload
            }
        default:
            return state
    }

}
