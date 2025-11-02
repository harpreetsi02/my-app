import { useEffect } from "react";

const TitleUpdater = () => {
    useEffect(() => {
        document.title = "Title Change";
    },[]);
    return(
        <div>
            <p>Title is Changed</p>
        </div>
    );
}

export default TitleUpdater

