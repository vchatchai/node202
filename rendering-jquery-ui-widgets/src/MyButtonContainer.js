import React from 'react'
import {fromJS} from 'immutable'

import MyButton from './MyButton'


class MyButtonContainer extends React.Component {
 // The initial state is an empty Immutable map, because
  // by default, we won't pass anything to the jQuery UI
  // button widget.
  state = {
    data: fromJS({}),
  }

  // Getter for "Immutable.js" state data...
  get data() {
    return this.state.data;
  }

  // Setter for "Immutable.js" state data...
  set data(data) {
    this.setState({ data });
  }

  // Before the component is mounted for the first time,
  // we have to bind the "onClick()" handler to "this"
  // so that the handler can set the state.
  componentWillMount() {
    this.data = this.data
      .merge(this.props, {
        onClick: this.props.onClick, // eslint-disable-line react/prop-types
      });
  }

  // Renders the "<MyButton>" component with this
  // component's state as properties.
  render() {
    return (
      <MyButton {...this.state.data.toJS()} />
    );
  }
}

MyButtonContainer.defaultprops = { 
    onClick: () => {},
}

export default MyButtonContainer;