// ./src/index.js

import React from 'react';
// import react
import ReactDOM from 'react-dom';
// import ... I forgot what this does. look it up later.
import counterReducer from './reducers/counterReducer.js';
// lab specific
import App from './App';
// import the App file
import './index.css';
// import the css
import { createStore } from 'redux';
// function that alters the state using the reducer (still irksome) we provide as an argument and returns the state

const store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// sadly and to my vast irritation, this only works for Chrome. Firefox may have a similar extension, but ugh. 

ReactDOM.render(
<App store={store} />, /* Passing the store variable as a prop to the app component(?) 
the app then uses the dispatch method 'increase-whatever' in the handleClick method to increase the whatever every time the button is clicked 
and beneath the button in a <p> tag the number of clicks is displayed via the getState method */
document.getElementById('root'));
