import React from "react";
class Bind extends React.Component{
    state = {counter : 1}
    incrementHandler = () => {
        this.setState({counter : this.state.counter + 1 })
    }
    decrementHandler = () => {
        this.setState({counter : this.state.counter -1})
    }
    render(){
        return <>
        <pre>{JSON.stringify(this.state)}</pre>
        <i className="fa fa-minus-triangle" onClick={this.decrementHandler}></i>
        {this.state.counter}
        <i className="fa fa-plus-triangle" onClick={this.incrementHandler}></i>
        </>
    }
}
export default Bind