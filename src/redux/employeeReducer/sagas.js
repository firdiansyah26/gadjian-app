import * as actionType from '../actionTypes'
import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as config from '../../config/config'
import { setLoader, handleState } from './actions'

export function* getListEmployee(action) {
    try {
        yield put(setLoader(true))
        let _response = yield call(config.GET, config.URL.LIST_API + "?results=28")
        let _data = _response.data.results

        let _page = 0
        for (let i = 0; i < _data.length; i++) {
            if (i % 4 === 0) _page++
            _data[i]['personnelId'] = i + 1
            _data[i]['page'] = _page
        }
        yield put(handleState('lastPage', _page))
        yield put(handleState('currentList', _data.filter(obj => obj['page'] === action.param)))
        yield put({ type: actionType.GET_LIST_EMPLOYEE_SUCCESS, value: _data })
        yield put(setLoader(false))
    } catch (error) {
        console.log('error : ', error)
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(actionType.GET_LIST_EMPLOYEE, getListEmployee),
    ])
}