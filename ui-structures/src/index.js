import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <section>
        <header>
            <h1>A Header</h1>
        </header>
        <nav>
            <a href="item" >Nav Item</a>
        </nav>
        <main>
            <p>The main content...</p>
        </main>
        <footer>
            <small>&copy; 2016</small>
        </footer>
    </section>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
