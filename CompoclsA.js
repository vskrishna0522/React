import React, { Component } from 'react'
import CompoclsB from './CompoclsB'
class CompoclsA extends Component {
    ename = "kittu__16"
    render() {
        return (
            <div>
                <h1>Component A</h1>
                <hr />
                <CompoclsB name={this.ename} />

            </div>
        )
    }
}

export default CompoclsA