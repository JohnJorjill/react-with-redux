import { createStore } from "redux"
import reducers from "./reducers";

// create store from all reducers
export const store = createStore(
    reducers,
    {}
)