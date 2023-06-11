import {Component} from "react";

class R010_Variable extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var varName = 'react';
    console.log('varName1: ' +varName)
    var varName = '200'; // varName is already defined no redeclerre
    console.log('varName2: ' + varName)

    let letName = 'react'
    console.log('letName1: ' + letName)
    //let letName = '200'
    // Parsing error: Identifier 'letName' has already been delared
    letName = 'react200';
    console.log('letName2: '+ letName);

    const constName = 'react';
    console.log("constName: "+ constName)
    //const constName = '200'
    //Parsing error: Identifier 'constName' has already been declared
    //constName = 'react200'
    // Uncaught TypeError: Assignment to constant vaiable
  }

  render() {
    return (
      <h2>This is Variable</h2>
    )
  }
}

export default R010_Variable