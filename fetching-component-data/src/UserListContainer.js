import  React from 'react';
import {fromJS}  from 'immutable';

import  {users} from './api'
import  UserList from './UserList'

export default class UserListContainer extends React.Component { 
    state = {
        data: fromJS(
            {
                error: null ,
                loading:'loading....',
                users:  [],
            }
        )
    }

    get data() { 
        return this.state.data;
    }

    set data(data){ 
        this.setState({data});
    }

    componentDidMount(){
        users().then(
            (result) => { 
                this.data = this.data.set('loading',null).set('error', null).set('users', fromJS(result.users));
            },
            (error) => {
                this.data = this.data.set('loading',null).set('error', error)
            }
        )
    }

    render(){
        return (<UserList {...this.data.toJS()} />);
    }


}