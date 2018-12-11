import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyComponent from './MyComponent';
import * as serviceWorker from './serviceWorker';

const myHeader = (<h1>My Header</h1>)
const myContent = (<p>My Content</p>)


ReactDOM.render((
    <section>
        <MyComponent  {...{ myHeader }} {...{ myContent }} />
        <MyComponent myHeader="My Header"  {...{ myContent }} />
        <MyComponent {...{myHeader}} myContent="My Content" />
        <MyComponent {...{myHeader}} myContent={[myContent, myContent, myContent]} />
    </section>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
