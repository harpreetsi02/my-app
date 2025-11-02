import { useEffect } from "react";

const AlertOnLoad = () => {
    useEffect(() => {
        alert("This page is Successfully loaded")
    },[]);
    return(
        <p>loaded page</p>
    );
}

export default AlertOnLoad