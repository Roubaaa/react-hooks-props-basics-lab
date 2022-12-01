import React from "react";
import Links from "../components/Links"
function Isbio(props){
  if (props.bio === "") {
    return null ; 
  }
  else if (props.bio) {
 return (<p>{props.bio}</p>)
  } else {
    return null;
  }}

function About(props) {
 
  return (
    <div id="about">
      <h2>About Me</h2>
      <Isbio bio={props.bio} />
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      < Links github={props.github} 
              linkedin={props.linkedin}
      />
    
    </div>
  );
}

export default About;
