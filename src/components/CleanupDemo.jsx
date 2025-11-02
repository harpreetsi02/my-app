import { useEffect } from "react";

const CleanupDemo = () => {
    useEffect(() => {
        console.log("Clean Up");
        return () => console.log("Unmouted (Cleanup)")
    }, []);
    return <div>Check console Cleanup</div>
}

export default CleanupDemo