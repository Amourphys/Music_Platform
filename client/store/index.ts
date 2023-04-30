import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { createStore } from "redux";
import { rootReducer } from "./reducers";

// create a makeStore function
const makeStore = (context: Context) => createStore(rootReducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(makeStore, {debug: true});