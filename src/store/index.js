import { createStore, combineReducers } from "redux";
import oneTwoThreeReducers from './reducers/oneTwoThreeReducers';

const rootReducer = combineReducers({
    // key: value
    oneTwoThreeReducers,
});

const store = createStore(
    rootReducer,
    // Config redux dev tool
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;