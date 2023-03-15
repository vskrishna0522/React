import React from "react";
import CompoB from "./CompoB";
import CompoC from "./CompoC";
import CompoD from "./CompoD";
let CompoA = () => {
    let eid = 100;
    let ename = "kittu"
    return  <div>
        <h2> FRIST</h2>
        <hr/>
        <CompoB ename={ename} eid={eid}/> <hr />
        <CompoC ename={ename} eid={eid}/>  <hr />
        <CompoD ename={ename} eid={eid}/> <hr />
    
    </div>
}
export default CompoA   