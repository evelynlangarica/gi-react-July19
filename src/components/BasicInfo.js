import '../App.css';
import React, {Component} from "react";

// Medium Challenge

//destructured props
const BasicInfo = ({person}) => {

    return (
// VERY EASY CHALLENGE CREATE BASIC INFORMATION
                <div className="App">
                  <h1>Evelyn</h1>
                  <p>{person.name}</p>
                  
                  <h1>11/06/97</h1>
                  <p>{person.dateOfBirth}</p>
                </div>
                );
}

export default BasicInfo;