import { store } from "./store";
import { bugAdded, bugResolved } from "./actions";

store.dispatch(bugAdded("BugOne"));
store.dispatch(bugAdded("BugTwo"));
store.dispatch(bugResolved(1));

console.log(store.getState());
