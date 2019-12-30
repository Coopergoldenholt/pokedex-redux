import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import promiseMiddleware from "redux-promise-middleware";

export default createStore(
	reducer,
	compose(
		applyMiddleware(promiseMiddleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);
