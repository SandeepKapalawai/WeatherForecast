import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner.js'

class App extends React.Component {
  
  state ={
      lat : null,
      errorMessage :''
    }
 
  componentDidMount()
  {
       window.navigator.geolocation.getCurrentPosition(
        position => this.setState({lat: position.coords.latitude}),
        err=> this.setState({errorMessage : err.message})
    )
  }

 componentDidUpdate()
  {
    console.log("CDU");
  }


  renderContent(){
    if(this.state.errorMessage && ! this.state.lat){
      return (
        <div>
          
          Error : {this.state.errorMessage}
        </div>
        )
    }

    if(!this.state.errorMessage &&  this.state.lat){
      return (
        <div>
          <SeasonDisplay lat={this.state.lat}/>
        </div>
        )
      }
  return (
      <div>
       <Spinner  message="please accept the pop up request"/>
      </div>
  )}
 
render() 
{
return(
  
    <div className="App">
    {this.renderContent()}
    </div>
    );
  }
}
export default App;
