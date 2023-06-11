import {Component} from "react";

class R009_Es6 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var jsString1 = "javascript"
    var jsString2 = "is good\nnextline"
    console.log(jsString1+" String " +jsString2+'~');

    var Es6String1 = 'ES6'
    var Es6String2 = 'is good'
    console.log(`${Es6String1} String ${Es6String1}!!
____nextline`)

    var LongString = "added String function in ES6";
    console.log('startsWith: ' + LongString.startsWith("added"))
    console.log('endsWith: ' + LongString.endsWith('ES6'))
    console.log('includes : ' + LongString.includes('String'))
  }

  render() {
    return (
      <h2>[This is ES6 String]</h2>
    )
  }
}

export default R009_Es6