import React  from 'react';
import {fromJS} from 'immutable';
import {render} from 'react-dom';
import {users}  from './api';

import UserList from './UserList';

const onClickCancel= (e) => { 
    e.preventDefault();
    render(
        (<p>Cancelled</p>), 
        document.getElementById('root')
    );
};

export  default class UserListContainer extends React.Component{
    state = {
        data: fromJS({
            error: null,
            loading: 'loading...',
            users: [],
        }),
    }

    get data() { 
        return this.state.data;
    }

    set data(data){
        this.setState({data});
    }

    componentDidMount(){
        this.job = users();
        this.job.then(
            (result)=> { 
                this.data = this.data
                .set('loading',null)
                .set('error',null)
                .set('users', fromJS(result.users));
            },
            (error)=> {
                if(!error.cancelled) {
                    this.data = this.data
                    .set('loading',null)
                    .set('error', error)
                }
            },
        );
    }
    conpomentWillUnMount() {
        this.job.cancel();
    }
    render() { 
        return (
            <UserList onClickCancel={onClickCancel} {...this.data.toJS()} />
        );
    }
}

 