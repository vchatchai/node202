import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyComponent from './MyComponent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <section>
        <MyComponent label="Regular Values"
            max={20}
            value={10}
        />
        <MyComponent label="String Values"
            max="20"
            value="10"
        />
        <MyComponent label={Number.MAX_SAFE_INTEGER}
            max={new Date()}
            value="10"
        />
    </section>


), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
