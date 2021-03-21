import { all } from 'redux-saga/effects';

import EmployeeSagas from "../redux/employeeReducer/sagas"

export default function* rootSaga(getState) {
    yield all([
        EmployeeSagas()
    ]);
}