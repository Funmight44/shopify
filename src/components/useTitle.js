import { useEffect } from "react";

const  UseTitle = (title) => {
    useEffect(() => {
        document.title = `${title} page`
    })
}
 
export default UseTitle ;