import React from "react";
class Digitalclock23323 extends React.Component {
    state = {
        gst: new Date().toLocaleTimeString()
    }
    componentDidMount() {
      setInterval(() =>{
        this.setState({
            gst: new Date().toLocaleTimeString()
        })
      }, 1000)
    }
    render() {
        return <div>
            <pre> {JSON.stringify(this.state.gst)}</pre>
            <h1>{this.state.gst}</h1>
        </div>
    }
}
export default Digitalclock23323