
import './App.css';
import React, {Component} from "react";
import BasicInfo from './components/BasicInfo';

//EASY Challnege CREATE Constructor
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      person: [{
        name: "evelyn",
        number: 6,
        dateOfBirth: "11/06/1997"
      }]
    }
  }


  //HARD CHALLENGE

render() {  
  return <>{
    this.state.person.map(person => {
      console.log(person)
      return <BasicInfo person={person} key={person.name}/> 
    })
    }
    </>
   
}  
}

export default App;
