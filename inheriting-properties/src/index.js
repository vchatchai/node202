import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyComponent from './MyComponent';
import * as serviceWorker from './serviceWorker';

const users = ['User 1', 'User 2',];
const groups = ['Group 1', 'Group 2',];

ReactDOM.render((
    <section>
        <MyComponent />
        <MyComponent users={users} />
        <MyComponent groups={groups} />
        <MyComponent users={users} groups={groups} />
        {/* <MyComponent users={0} groups={0} /> */}
    </section>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
