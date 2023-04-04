import React, {useEffect} from "react";
const Digiclock = () => {
    let [ct, setCT] = React.useState(new Date().toLocaleTimeString())
    useEffect(() => {
        setInterval(() => {
        setCT(new Date().toLocaleTimeString())
        }, [1000])
    }, [])
    return (
            <div>
                <h2>{JSON.stringify(ct)}</h2>
            </div>
    )
}
export default Digiclock