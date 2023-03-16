import React from "react";
class CompoclsD extends React.Component{
    render(){
        return (<> 
        <h1>indhu third component da </h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <h3> insta ID: {this.props.name} </h3>
        </>)
    }
}
export default CompoclsD