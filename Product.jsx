import React from "react";
class Product extends React.Component{
    state = { name : "iphone14 ", price: 28999, qty: 1 }
    incrementHandler = () => {
        this.setState({qty: this.state.qty + 1})
    }
    decrementHandler = () => {
        this.setState({qty: this.state.qty - 1})
    }
    render(){
        return <div className="container" >
            <div className="row">
                <div className="col-md-6">
                    <table className="table">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.name}</td>
                                <td>{this.state.price}</td>
                                <td><i onClick={this.decrHandler} className="fa fa-minus-circle"  ></i>{this.state.qty}<i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                <td>{this.state.qty * this.state.price}</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    }
}
export default Product