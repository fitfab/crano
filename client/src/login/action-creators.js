import axios from 'axios'

import {
    REQUEST_BEGIN,
    REQUEST_SUCCESS,
    REQUEST_FAILED
} from './actions-types'

function requestBegin() {
    return {
        type: REQUEST_BEGIN
    };
}

function requestFailed(payload) {
    return { payload, type: REQUEST_FAILED };
}

function requestSuccess(payload) {
    return { payload, type: REQUEST_SUCCESS };
}

/**
 * thunk creator
 */
export function loginUser(user) {

    console.log('loginUser: ', user)

    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.

    return (dispatch) => {
        // 1st dispatch: the app state is updated to inform
        // that the API call is starting.
        dispatch(requestBegin());

        //2nd Ajax: call to the api
        axios.post('/', user, { timeout: 3000 })
        .then((json) => {
            // Notify that we have received the data
            dispatch(requestSuccess(json));

        }).catch((json) => {
            // Notify of any failure from the request
            dispatch(requestFailed(json));

        });

    };

}
