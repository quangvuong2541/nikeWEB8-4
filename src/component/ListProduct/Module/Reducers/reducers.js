import * as ActionType from "../Constants/constant"
let initialState = {
    data: [],
    isLoading: false,
}
const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.FETCH_API_LISTPRODUCT:
            state.data = payload
            break;
        case ActionType.IS_LOADING_LIST_PRODUCT:
            state.isLoading = payload
            break;
        default:
            break
    }
    return { ...state}
}
export default reducer