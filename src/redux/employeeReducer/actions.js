import * as actionType from '../actionTypes'

export const handleState = (field, value) => {
    return {
        type: actionType.HANDLE_STATE,
        field,
        value
    }
}

export const getDataEmployee = (param) => {
    return {
        type: actionType.GET_LIST_EMPLOYEE,
        param
    }
}

export const setLoader = (value) => {
    return {
        type: actionType.SET_LOADER,
        value
    }
}

export const onSearch = (value, param) => {
    return {
        type: actionType.ON_SEARCH_LIST,
        value, param
    }
}