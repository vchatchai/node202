import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyComponent from './MyComponent';

const  myComponent =  ReactDOM.render(<MyComponent />, document.getElementById('root'));


setTimeout(() => {
    myComponent.setState({
        heading: 'React Awesomesauce',
        content: 'Done!',
    });
    
}, 3000)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
