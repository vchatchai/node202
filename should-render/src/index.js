import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';
import * as serviceWorker from './serviceWorker';



function render() {
    const myList =  ReactDOM.render(<MyList />, document.getElementById('root'));
    myList.data = myList.data.setIn(['items',0],0)
    console.log(myList.data)
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


for( let i = 0; i< 100; i++ ){ 
    render();
}