// Eval has same previlage as caller function therefore can easily be used for Cross Scripting or getting valribale values

import React, { Component } from 'react';

const privateVar = 'password: foo';

class Eval extends Component {
    constructor() {
        super();
        this.state = { 
            expression: '',
            result: '' 
        };
    }

    updateExpression = event => {
        this.setState({ expression: event.target.value });
    }

    vulEval=()=>{
        const result = eval(this.state.expression);
        this.setState({result});
    }

    //Safety from EVAL function
    safEval=() =>{
        const func = Function(`return(${this.state.expression})`);
        this.setState({result: func()});
    }
    render() {
        return (
            <div>
                <h3> Evaluating User-Supplied Expressions</h3>
                <br />
                <input onChange={this.updateExpression} />
                <br />
                <button onClick={this.vulEval}>Vulnerable Evaluate</button>
                <button onClick={this.safEval}>Safe Evaluate</button>
                <br/>
                <h4>Result: {this.state.result}</h4>
            </div>
        )
    }
}

export default Eval;