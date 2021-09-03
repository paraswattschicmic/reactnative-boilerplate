import { all, put, takeLatest } from "redux-saga/effects";
import { postRequest, updateAuthToken } from "../../shared/services/axios";
import {
    startLoading,
    stopLoading,
    updateAuthTokenRedux,
    LOGIN_REQUEST,
} from "../actions";
import { API, STRINGS } from "../../shared";

function* loginUser({
    payload: {
        netConnected,
        email,
        password,
        success = () => { },
        fail = () => { },
    } = {},
}) {
    try {
        if (netConnected) {
            yield put(startLoading());
            const { status, data = {} } = yield postRequest({
                API: API.USER_LOGIN,
                DATA: { email, password, isMobile: true },
            });
            if (status == 200) {
                success();
                updateAuthToken(data?.data?.accessToken)
                yield all([
                    put(updateAuthTokenRedux(data?.data?.accessToken)),
                ]);
            } else {
                fail(data?.msg);
            }
        } else {
            fail(STRINGS.INTERNET_ERROR);
        }
    } catch (error) {
        fail(JSON.stringify(error));
    } finally {
        yield put(stopLoading());
    }
}

export default function* root() {
    yield all([
        takeLatest(LOGIN_REQUEST, loginUser)
    ]);
}
