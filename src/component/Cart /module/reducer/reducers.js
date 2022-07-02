import * as ActionType from "../contants/constant"
const cartLocal = JSON.parse(localStorage.getItem("cart"))
const userFavor = JSON.parse(localStorage.getItem("userFavor"))
const initialState = {
    products: cartLocal || [],
    productFavor: userFavor || []
}
const checkDuplicate = (payload, arr) => {
    for (const item of arr) {
        if (item.id === payload.id &&
            item.color === payload.color &&
            item.size === payload.size) {
            return item
        }
    }
    return null
}
const reducerCart = (state = initialState, { type, payload }) => {
    let productCopy = [...state.products]
    let productFavorCopy = [...state.productFavor]
    // console.log(payload);
    switch (type) {
        case ActionType.ADD_TO_CARD:
            // console.log(productCopy);
            //  nếu add thêm sản phẩm thì check duplicate 
            const itemAdd = checkDuplicate(payload, productCopy)
            // console.log(payload);
            if (itemAdd) {
                itemAdd.quantity += 1
            } else {
                productCopy = [...productCopy, payload]
            }
            state.products = productCopy
            localStorage.setItem("cart", JSON.stringify(state.products))
            break;

        default:
            break;
    }
    return { ...state }

}
export default reducerCart