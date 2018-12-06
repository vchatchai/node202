import React, { Component } from 'react';


export default class Footer extends Component {

  constructor() {
    super();
    this.state = {count: 0}
    this.increment = this.increment.bind(this)
  }

  increment() { 
    this.setState({count:this.state.count + 1})
  }

  render() {
    return (

        <footer>
        &copy;Copyright 2018
      
        <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
      
      </footer>
 
    );
  }
}
 





























