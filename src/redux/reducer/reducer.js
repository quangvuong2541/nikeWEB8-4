import {combineReducers} from "redux"
import reducerCart from "../../component/Cart /module/reducer/reducers"
import reducerURL from "../../component/ListProduct/Module/Reducers/reducers"
import reducerSignSignUp from "../../component/NavBar/NavMainComponent/module/reducers/reducers"
const rootReducer = combineReducers({
    reducerURL,
    reducerCart,
    reducerSignSignUp,
})
export default rootReducer