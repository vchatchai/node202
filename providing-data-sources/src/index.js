import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import * as serviceWorker from './serviceWorker';
import { connect, getState, setState } from './store';
import MyInput from './MyInput';
import MyList from './MyList';


const ConnectedInput = connect(MyInput)
const ConnectedList = connect(MyList)

setState(getState().merge({
    placeholder: 'Search...',
    items:['First', 'Second', 'Third', 'Fourth'],
    tempItems: [],
}));



ReactDOM.render((
    <section>
      <ConnectedInput />
      <ConnectedList />
    </section>
    ),
    document.getElementById('root')
  );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
