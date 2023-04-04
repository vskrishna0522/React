import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Digiclock from './Digiclock'
class App extends Component {
    render() {
        return (
         <>
            <div>
                <Router>
                    <Digiclock/>
                    <Routes>
                        <Route path="/Digiclock" element={Digiclock } />
                    </Routes>
                </Router>
            </div>
        </>
        )
    }
}

export default App