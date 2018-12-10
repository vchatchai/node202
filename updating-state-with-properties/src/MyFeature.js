import React from 'react'
import MyButton from './MyButton'
import { fromJS } from 'immutable'


class MyFeature extends React.Component {
    state = {
        data: fromJS({
            clicks: 0,
            disabled: false,
            text: '',
        }),
    }

    get data() {
        return this.state.data;
    }

    set data(data) {
        this.setState({ data });
    }

    componentWillMount() {
        this.data = this.data.set('text', this.props.text);
    }

    componentWillReceiveProps({ disabled }) {
        this.data = this.data.set('disabled', disabled);
    }

    onClick = () => {
        this.data = this.data.update('clicks', c => c + 1);
    }

    render() {
        return (
            <MyButton onClick={this.onClick} {...this.data.toJS()}></MyButton>
        );
    }
}

MyFeature.defaultProps = { 
    text: "A Button",
}

export default MyFeature;