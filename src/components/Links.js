 // eslint-disable-next-line
import React from "react";

function Links(props){
    const github = props.github
    const linkedin= props.linkedin
    //console.log(github)
    return(
<div>
    <h3>Links</h3>
    <a href={github}>{github}</a>
    <a href={linkedin}>{linkedin}</a>

</div>
    )}
export default Links;
