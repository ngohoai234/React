import { applyMiddleware, compose, createStore } from 'redux';

import { createInjectorsEnhancer } from 'redux-injectors';

import { routerMiddleware } from 'react-router-redux';

import { createBrowserHistory } from 'history';

import createSagaMiddleware from 'redux-saga';

import { useSelector } from 'react-redux';

import createReducer from './rootReducer';

import rootSaga from './user/saga';

const history = createBrowserHistory();

const routeMiddleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

const { run: runSaga } = sagaMiddleware;

const middlewares = [sagaMiddleware, routeMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  const enhancers = [
    applyMiddleware(...middlewares),
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];
  const store = createStore(createReducer(), initialState, composeEnhancers(...enhancers));

  sagaMiddleware.run(rootSaga);

  return store;
}

export { history };

export const useAppSelector = useSelector;
