import React from "react";

function Links(props){
    return(
        <div id="links">
            <h3>Links</h3>
            <div>
            <a href="{props.github}">{props.github}</a>
            </div>
            <div>
            <a href=" {props.linkedin}">{props.linkedin}</a>
            </div>
            
        </div>
    )
}

export default Links