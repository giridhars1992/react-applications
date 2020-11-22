import { GET_DATA_FAIL, GET_DATA_START, GET_DATA_SUCCESS } from "./ActionTypes"

export const GetDataStart = () => {
    return {
        type: GET_DATA_START
    }
}

export const GetDataSuccess = (res) => {
    return {
        type: GET_DATA_SUCCESS,
        payload: res
    }
}

export const GetDataFail = (error) => {
    return {
        type: GET_DATA_FAIL,
        payload: error
    }
}