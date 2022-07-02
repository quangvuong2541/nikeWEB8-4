import API from "../../../../axios/API";
import * as ActionType from "../Constants/constant";

export const createAction = ({ type, payload }) => {
    return {
        type,
        payload,
    }
}

export const actGEtProductAPI = (gender, typeProduct) => {
    return async (dispatch) => {
        try {
            dispatch(createAction({
                type: ActionType.IS_LOADING_LIST_PRODUCT,
                payload: true
            }))
            const res = await API(
                `product/?gender=${gender}&typeProduct=${typeProduct}`,
                "GET"
            );
            dispatch(createAction({
                type: ActionType.FETCH_API_LISTPRODUCT,
                payload: res.data
            }))
            // console.log(res.data);
            dispatch(createAction({
                type: ActionType.IS_LOADING_LIST_PRODUCT,
                payload: false
            }))
        } catch (error) {
            console.log({ ...error });
        }
    }
}