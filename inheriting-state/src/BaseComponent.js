import React from 'react';
import {fromJS} from 'immutable'

export default class BaseComponent extends React.Component { 
    state = {  
        data: fromJS(
            {
                name: 'Mark',
                enabled: false,
                placeholder:'',
            }
        )
    }

    get data() { 
        return this.state.data;
    }

    set data(data) { 
        this.setState({data});
    }
    render(){ 
        return null;
    }
}