import React from "react";

function About(props) {
const isBio = props.isBio;
if(isBio) {
  return <p>{props.isBio}</p>
}
  return <p>""</p>
}
{(
    <div id="about">
      <h2>About Me</h2>
      <p></p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
    </div>
  );
}


export default About;

