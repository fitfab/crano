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
export function fetchNav() {

    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.

    return (dispatch) => {
        // 1st dispatch: the app state is updated to inform
        // that the API call is starting.
        dispatch(requestBegin());

        //2nd Ajax: call to the api
        axios.get('/api/global/navigation', { timeout: 3000 })
        .then((json) => {
            // Notify that we have received the data
            dispatch(requestSuccess(json.data));

        }).catch((error) => {
            // Notify of any failure from the request
            dispatch(requestFailed(error.response.data));

        });

    };

}
