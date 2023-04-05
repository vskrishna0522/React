import React from "react";
class Newobj5423 extends React.Component {
    message = "COMPANY Name"
    ename = "RCS"
    emp = {name: "sekar", salary: 10000}
    render() {
        return <div> 
            <h2> <u> COMPANY NAME</u> </h2>
            <hr/>
            <h4>Message: {this.message} </h4>
            <h3>IG ACC NAME: {this.ename} </h3>
            <h4>Employee Name: {this.emp.name} , Employee salary:{this.emp.salary}</h4>
        </div>
    }
}
export default Newobj5423