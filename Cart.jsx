import React, { useState } from "react";
let Cart = () => {
    let [product, setproduct] = useState({Name: "jayanth", Class: 2, Section: "C", Fees: 20000, Term: 1})
    let incrHandler = () => {
        setproduct({ ...product, qty: product.qty + 1 })
    }
    let decrHandler = () => {
        setproduct({ ...product, qty: product.qty - 1 })
    }
   
   return <React.Fragment>
        <pre>{JSON.stringify(product)}</pre>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <table className="table">
                        <thead className="bg-primary">
                <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Fees</th>
                    <th>Term</th>
                </tr>
                         </thead>
                 <tbody>
                <tr>
                                <td>{product.Name}</td>
                                <td>{product.Class}</td>
                                <td>{product.Section}</td>
                                <td>{product.Fees}</td>
                                <td>{product.Term}</td>
                                <td><i onClick={decrHandler} className="fa fa-minus-circle"></i> {product.Term}
                                    <i className="fa fa-plus-circle" onClick={incrHandler}></i></td>
                                <td>{product.Fees * product.Term}</td>
                </tr>
            </tbody>
        </table>
            </div>
        </div>
    </div>
    </React.Fragment>
}
export default Cart