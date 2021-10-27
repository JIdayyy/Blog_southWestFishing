import { combineReducers } from "redux";

import app from "@redux/slices/appstate/appstate";
import admin from "@redux/slices/appstate/adminState";

const rootReducer = combineReducers({ app, admin });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
