import * as ActionType from "../Constants/constant"
const GenderTypeProduct = JSON.parse(localStorage.getItem("GenderAndTypeProduct"))
const search = JSON.parse(localStorage.getItem("GenderAndTypeProduct"))
let initialState = {
    data: [],
    isLoading: false,
    typeProduct: GenderTypeProduct?.typeProduct,
    gender: GenderTypeProduct?.gender,
    filterColor: [],
    filterSize: [],
    dataSort: [],
    dataFilter: [],
    sortByTitle: "",
    dataSearchList: [],
    dataSearchInput: search === null ? [] : search,
}
const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.FETCH_API_LISTPRODUCT:
            state.data = payload
            break;
        case ActionType.IS_LOADING_LIST_PRODUCT:
            state.isLoading = payload
            break;

        case ActionType.CHANGER_GENDER_TYPEPRODUCT:
            state.typeProduct = payload.typeProduct
            state.gender = payload.gender
            localStorage.setItem("GenderAndTypeProduct",
                JSON.stringify({
                    gender: state.gender,
                    typeProduct: state.typeProduct
                }))
        default:
            break
    }
    return { ...state }
}
export default reducer