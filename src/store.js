import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index'




const middlewares = [thunk];
const store = createStore(reducers, compose(applyMiddleware(...middlewares)));

export default store;