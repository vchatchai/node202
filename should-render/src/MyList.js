import React from 'react';
import {fromJS} from 'immutable';

export  default class MyList extends React.Component { 
    state = { 
        data: fromJS ({ 
            items: new Array(5000).fill(null).map((v,i)=> i),
        }),
    };


    get data() { 
        return this.state.data;
    }

    set data(data) {
        this.setState({data});
    }

    shouldComponentUpdate(props, state){ 
        return this.data !== state.data;
    }

    render() { 
        const items = this.data.get('items');

        return (
            <ul>
                {items.map(i => (
                    <li key={i}>{i}</li>
                ))}
            </ul>
        )
    }
}