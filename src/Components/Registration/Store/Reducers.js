import { GET_DATA_FAIL, GET_DATA_START, GET_DATA_SUCCESS } from "./ActionTypes"

const initialState = {
    Email: '',
    Password: '',
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_START:
            return {
                ...state,
                loading: true
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case GET_DATA_FAIL:
            return {
                ...state,
                loading: false
            }
    }
}

export default reducer