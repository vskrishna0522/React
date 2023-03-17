import React, { Component } from 'react'
class Message extends Component {
    state = { message: "Select a number to know my gang " }
    gmHandler = () => {
        this.setState({ message: "kittu" })
    }
    gaHandler = () => {
        this.setState({ message: "surya" })
    }
    geHandler = () => {
        this.setState({ message: "Gokul" })
    }
    gnHandler = () => {
        this.setState({ message: "sunnil" })
    }
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state)}</pre>
                <h3>{this.state.message}</h3>
                <button onClick={this.gmHandler}>1</button>
                <button onClick={this.gaHandler}>2</button>
                <button onClick={this.geHandler}>3</button>
                <button onClick={this.gnHandler}>4</button>
            </div>
        )
    }
}

export default Message