import React from "react";
import Links from "./Links";
function About(props) {

  if (!props.bio) {
    return null;
  } else{
     <p>{props.bio}</p>
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links 
       linkedin = "https://www.linkedin.com/in/liza/"
       github = "https://github.com/liza"/>
    </div>       
  );
}

export default About;
