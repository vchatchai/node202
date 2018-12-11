import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyComponent from './MyComponent';
import * as serviceWorker from './serviceWorker';
import MyUser from './MyUser';


const users = [
    new MyUser('First1', 'Last1'),
    new MyUser('First2', 'Last2'),
    new MyUser('First3', 'Last3'),
]


ReactDOM.render((
    <section>
        <MyComponent
            myDate={new Date()}
            myCount={0}
            myUsers={users}
        />
        <MyComponent
            myDate="6/9/2016"
            myCount={false}
            myUsers={users}
        />
    </section>


), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
