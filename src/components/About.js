import React from "react";

function About(props) {

const links = props.links.linkedin;
const github = props.links.github
return(
    <div id="about">
      <h2>About Me</h2>
      { props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <a href={links}></a>
      <a> href={github}</a>
    </div>
  );
}


export default About;

