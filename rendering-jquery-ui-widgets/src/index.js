import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyButtonContainer from './MyButtonContainer';
import * as serviceWorker from './serviceWorker';



function onClick() {
    this.data.set('disabled', true);
}




ReactDOM.render((
    <section>
        <MyButtonContainer label="Text" />
        <MyButtonContainer
            label="My Button"
            icon="ui-icon-person"
            showLabel={false}
        />
        <MyButtonContainer
            label="Disable Me"
            onClick={onClick}
        />

    </section>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
