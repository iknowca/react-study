import React, {Component} from "react";

class R005_LifecycleEx extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    render() {
        console.log('3 renderCall');
        return (
            <h2>[This Is Constructor Function]</h2>
        )
    }
}

export default R005_LifecycleEx