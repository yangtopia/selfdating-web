import { createStore, compose, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import rootReducer, { RootState } from './rootReducer';

const middlewares = [thunkMiddleware];

const enhancer =
  process.env.APP_ENV === 'dev'
    ? composeWithDevTools({
      // Options: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#options
    })(applyMiddleware(...middlewares))
    : compose(applyMiddleware(...middlewares));

export default function configureStore(initialState = {}): Store<RootState> {
  const store = createStore(rootReducer, initialState, enhancer);

  // @ts-ignore
  if (process.env.APP_ENV === 'dev' && module.hot) {
    // @ts-ignore
    module.hot.accept(() => {
      store.replaceReducer(require('./rootReducer').default);
    });
  }

  return store;
}
