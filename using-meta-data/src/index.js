import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyUser from './MyUser';
import * as serviceWorker from './serviceWorker';

const myUser = ReactDOM.render(<MyUser />, document.getElementById('root'));

myUser.setState({
    modified: new Date(),
    first: 'First1',
    last: 'Last1',
});

myUser.setState({
    first: 'First2',
    last: 'Last2',
})

setTimeout( () => {
    myUser.setState({
        modified: new Date(),
        first: 'First3',
        last: 'Last3',
    });
},3000 )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
