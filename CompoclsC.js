import React from "react";
import CompoclsD from "./CompoclsD";
class CompoclsC extends React.Component{
    render(){
        return <> 
        <h1> idhu second compo </h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <CompoclsD name={this.props.name}/>
        </>
    }
}
export default CompoclsC