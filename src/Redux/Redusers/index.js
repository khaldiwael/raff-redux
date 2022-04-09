import { combineReducers } from "redux";
import { contactsReducer } from "./contacts_redusers";
import { productsReducer } from "./products";

import { usersReducer} from "./users";

export const rootReducer =combineReducers({
    contactsReducer,usersReducer,productsReducer
    })