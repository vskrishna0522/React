import React from "react";
class Formvaliupdatehandle extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        user: {fristname:"",lastname:""}
    }
    }
    updateHandler = (event) => {
        this.setState({user: {...this.state.user, [event.target.name]: event.target.value}})
    }
    submitHandler =(event) =>{
        event.preventDefault();
        alert(JSON.stringify(this.State))
    }
    render()
    {
    return<>
    <div className="container mt-5">
        <pre>{JSON.stringify(this.state.user)}</pre>
        <div className="row">
            <div className="col-md-5">
                <div className="card">
                    <div className="card-header bg-success text-black">
                        <h3>UPDATE HANDLER</h3>
                        <div className="card-body">
                            <form> 
                            <div className="form-group">
                                <input type="text" placeholder="frist name" className="form-control" name="fristname" onChange={this.updateHandler}  />
                                <div className="form-group">
                                    <input type="text" placeholder="last name" className="form-control" name="lastname" onchange={this.updateHandler}/>

                                </div>
                            </div>
                            </form>
                            
                            
                             </div>
                            
                    </div>

                </div>

            </div>

        </div>

    </div>
        </>
    }
}
export default Formvaliupdatehandle