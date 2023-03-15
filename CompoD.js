import React from "react";
let CompoD = (props) => {
    return <div> 
        <h2>FOURTH COMPO</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h3>Employee Name:{props.name}</h3>
    </div>
}
export default CompoD