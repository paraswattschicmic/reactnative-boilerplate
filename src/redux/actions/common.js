export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const UPDATE_AUTH_TOKEN = 'UPDATE_AUTH_TOKEN';
export const UPDATE_INTERNET_STATUS = 'UPDATE_INTERNET_STATUS'
export const RESET = 'RESET';

export const startLoading = () => {
    return {
        type: START_LOADING
    }
}

export const stopLoading = () => {
    return {
        type: STOP_LOADING
    }
}
export const updateAuthTokenRedux = (payload) => {
    return {
        type: UPDATE_AUTH_TOKEN,
        payload
    }
}
export const showKnowMore = (payload) => {
    return {
        type: SHOW_KNOW_MORE,
        payload
    }
}

export const updateInternetStatus = (payload) => {
    return {
        type: UPDATE_INTERNET_STATUS,
        payload
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}