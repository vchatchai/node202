import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyComponent from './Component'

let myComponent = ReactDOM.render((<MyComponent />), document.getElementById('root'));


setTimeout(() => { 
    myComponent.setState({
        first:"done",
    })


}, 1000 )

setTimeout(() => { 
    myComponent.setState({
        second:"done",
    })


}, 2000 )

setTimeout(() => { 
    myComponent.setState({
        third:"done",
    })


}, 3000 )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
