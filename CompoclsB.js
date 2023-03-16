import React from "react";
import CompoclsC from "./CompoclsC";
class CompoclsB extends React.Component{
    render(){
        return (<> 
         <h1> CompoclassB </h1>
         <pre>{JSON.stringify(this.props)}</pre>
         <CompoclsC name={this.props.name} />
         </> )
    }
}
export default CompoclsB