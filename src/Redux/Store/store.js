import { createStore ,applyMiddleware,compose} from "redux";
import { rootReducer } from "../Redusers";
import thunk from "redux-thunk";
const composeEnhancers=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose

export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));