import React from "react";

function Links(props){
    const isLinks = props.links.github
    const isLinkedin= props.links.linkedin.
    //console.log(isLinks)
    return(
<div>
    <h3>"Links"</h3>
    <a href={isLinks}></a>
    <a href={isLinkedin}></a>

</div>
    )}
export default Links;
