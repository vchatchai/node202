import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyComponent from './MyComponent';
import * as serviceWorker from './serviceWorker';


const validProps =  { 
    myString: 'My String',
    myNumber: 100,
    myBool: true,
    myFunc: () => 'My Return Value',
    myArray: ['One', 'Two', 'Three'],
    myObject: {myProp: 'My Prop'}
};

//eslint-disable-next-line
const invaliProps = { 
    myString:100 ,
    myNumber: 'My String', 
    myBool: () => 'My Reaturn Value',
    myFunc: true,
    myArray: {myProp: 'My Prop'},
    myObject: ['One', 'Two', 'Three'],
};

function render(props){
    ReactDOM.render(<MyComponent {...props} />, document.getElementById('root'));
}

render(validProps)
// render(invaliProps)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
