import React from 'react';
import { render } from 'react-dom'
// import ReactDOM from 'react-dom';
// import './index.css';
// import Button from './components/Button';
// import Counter from './components/Counter';
// import * as serviceWorker from './serviceWorker';

// // ReactDOM.render(<Counter initialVal={0} />, document.getElementById('root'));
// ReactDOM.render(<Button buttonText= "abd"  />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux'
import {
    addCounter,
    subtractCounter
} from './actions'
import App from './components/App'
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//console.log(store.getState())
// const unsubscribe = store.subscribe(() => console.log(store.getState()))
// store.dispatch(addCounter())
// store.dispatch(subtractCounter())
// // store.dispatch(addTodo('Learn about reducers'))
// // store.dispatch(addTodo('Learn about store'))
// // store.dispatch(toggleTodo(0))
// // store.dispatch(toggleTodo(1))
// // store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
// unsubscribe()
render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)