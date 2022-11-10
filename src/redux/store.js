import { createStore, combineReducers } from 'redux';
import techReducer from './tech/reducer';


const reducers = combineReducers({
  tech: techReducer,
});

const store = createStore(reducers);

export default store;