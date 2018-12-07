import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {Dialog} from 'primereact/dialog';
// import {Accordion,AccordionTab} from 'primereact/accordion';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Header from './components/Header' 
import {Button} from 'primereact/button';
import PaymentProduct from './components/PaymentProduct';
import PaymentDetail from './components/PaymentDetail';
import PaymentCommission from './components/PaymentCommission'

class App extends Component {

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
      <div className="payment-detail-background-color">

        <Header></Header>
        {/* <PaymentCommission></PaymentCommission> */}
        <PaymentDetail></PaymentDetail>
        {/* <PaymentProduct ></PaymentProduct>  */}
      </div>
 
    );
  }
}

export default App; 