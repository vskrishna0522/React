import React from "react";
class Formvalidreact extends React.Component
{
    constructor(props) {
    super(props)
    this.state = {
        email: "",
        password:""
    }
    }
    emailHandler = (event) =>{
        console.log(event.target)
        console.log(event.target.value)
        this.setState({email: event.target.value})
        this.setState({msg:"rajni@gmail.com"})
    }
    passwordHandler = (event) => {
        this.setState({password: event.target.value})
    }
    submitHandler =(event) =>{
        event.preventDefault();
        console.log(this.state);
    }
    render()
    {
        return ( <>
        <h2>login details</h2>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submit
        }>
            <div>
                <label>Email id:</label>
                <input type="text" onchange={this.emailHandler}></input>
            </div>
            <div>
                <label> password :</label>
                <input type="password" onchange={this.passwordHandler}></input>
            </div>
            <input type="submit"/>
        </form>
        </> )
    }
}
export default Formvalidreact