import {createStore} from "redux"
//import {configureStore} from "redux"
import rootReducers from "../reducer"

const store = createStore(rootReducers);

export default store;
