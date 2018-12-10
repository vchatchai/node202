import React from 'react';
import {fromJS} from 'immutable';


import { users } from './api';
import UserList from './UserList';




class UserListContainer extends React.Component {
    state = {
        data: fromJS({
                error: null,
                users: [],
            }),
    }


    get data() {
        return this.state.data;
    }

    set data(data) {
        this.setState({ data });
    }

    componentWillMount() {
        this.data = this.data.set('loading', this.props.loading);
    }
    componentDidMount() {
        users().then(
            (result) => {
                this.data = this.data.set('loading', null).set('error', null).set('users', fromJS(result.users));
            },
            (error) => {
                this.data = this.data.set('loading', null).set('error', error);
            }
        );
    }

    render() {
        return (
            <UserList {...this.data.toJS()} />
        );
    }
}

UserListContainer.defaultProps = {
    loading: 'loading...',
};


export default UserListContainer;