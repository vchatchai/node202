import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyComponent from './MyComponent';
import cond from'./cond'
import * as serviceWorker from './serviceWorker';

const ComposeVisible = cond(MyComponent, () => true)
const ComposeHidden = cond(MyComponent,  () => false)

ReactDOM.render((
    <section>
        <h1>Visible</h1>
        <ComposeVisible />
        <h2>Hidden</h2>
        <ComposeHidden />
    </section>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
