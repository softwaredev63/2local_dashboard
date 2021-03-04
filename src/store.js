import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import sliceReducer from "./slices/slice";

const rootReducer = combineReducers({
	slice: sliceReducer,
});

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["slice"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default { store, persistor };
