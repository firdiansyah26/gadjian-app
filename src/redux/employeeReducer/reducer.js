import {
    HANDLE_STATE, GET_LIST_EMPLOYEE_SUCCESS, SET_LOADER, ON_SEARCH_LIST
} from '../actionTypes'

const initState = {
    loader: false,
    listEmployee: [],
    searchList: undefined,
    currentPage: 1,
    lastPage: 1,
    currentList: [],
    listSearch: []
}

const employeeReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_LOADER:
            return {
                ...state, loader: action.value
            }
        case HANDLE_STATE:
            return {
                ...state, [action.field]: action.value
            }
        case ON_SEARCH_LIST:
            let _filter = []
            if (action.value === 'change') {
                if (state.listSearch.length !== 0) {
                    _filter = state.listSearch.filter(obj => obj.page === action.param.page)
                } else {
                    _filter = state.listEmployee.filter(obj => obj.page === action.param.page)
                }
                state.currentList = _filter
            } else {
                if(action.value !== "") _filter = state.listEmployee.filter(obj => obj.name.first.includes(action.value))
                else _filter = state.listEmployee 

                if (_filter.length > 4) {
                    let _page = 0
                    for (let i = 0; i < _filter.length; i++) {
                        if (i % 4 === 0) _page++
                        _filter[i]['page'] = _page
                    }
                    state.listSearch = _filter
                }
                state.currentPage = 1
                state.currentList = _filter.filter(obj => obj.page === 1)
            }
            return {
                ...state
            }
        case GET_LIST_EMPLOYEE_SUCCESS:
            return {
                ...state, listEmployee: action.value
            }
        default:
            return state
    }
}

export default employeeReducer