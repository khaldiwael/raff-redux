import { createStore } from "redux";
import { rootReducer } from "../Redusers";

export const store = createStore(rootReducer);