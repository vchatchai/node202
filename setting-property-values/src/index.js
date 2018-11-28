import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  MyButton from './MyButton'

import MyBotton from './MyButton'
import MyList  from './MyList'


const appState = {
    text: 'My Botton',
    disabled: true,
    items :['First','Second', 'Third'],
}

function render(props) { 
    ReactDOM.render((
        <main>
            
            <MyBotton text={props.text} disabled={props.disabled} ></MyBotton>
            <MyList items={props.items} />
        </main>
    ), document.getElementById('root'));
}

render(appState)

setTimeout(() => { 
    appState.disabled = false;
    appState.items.push('Fourth');
    render(appState);
}, 1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
