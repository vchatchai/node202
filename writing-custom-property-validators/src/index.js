import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyComponent from './MyComponent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <section>
        <MyComponent
            myArray={['first', 'second', 'third']}
            myNumber={99} />
        <MyComponent
            myArray={[]}
            myNumber={100} />
    </section>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
