import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

class Puma extends React.Component{
    constructor(props){
        super(props);
        this.changeState = this.changeState.bind(this);
    }
    state = {
        visible: false,
        love: "I love you!",
        day: "have a nice day!"
    }
    changeState(){
        var pumaContent = document.getElementById("pumaContent");
        this.state.visible?pumaContent.innerHTML = this.state.day:pumaContent.innerHTML = this.state.love;
        this.setState({
          visible: !this.state.visible,
          love: "I love you!",
          day: "have a nice day!"
        })
        console.log("State changed")
    }
    render(){
        return(
        <div >Purnima, <button id="pumaContent" onClick={this.changeState}>{this.state.day}</button></div>
        )
    }
}
class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>This is my home</h1>
                
            </div>
        )
    }
}
class About extends React.Component{
    state= {
        likes: ["Playing soccer", "Hanging out with friends", "Watching anime, tv shows and movies", "Reading novels and comics", "Dating Purnima", "Know Jesus more"]

    }
    render(){
        return(
            <div>
                <h1>Few things about me</h1>
                <h2>Things I like:</h2>
                <ul>
                    {this.state.likes.map((hobby, i)=><li key={i}>{hobby}</li>)}
                </ul>
            </div>
        )
    }
}
class Contact extends React.Component{
    render(){
        return(
            <div>
                <h1>0423222451</h1>
            </div>
        )
    }
}
class Header extends React.Component{
    constructor(props){
        super(props);
        this.showHome = this.showHome.bind(this);
        this.showAbout = this.showAbout.bind(this);
        this.showContact = this.showContact.bind(this);
    }
    state = {
        home: true,
        about: false,
        contact: false
    }
    showAbout(){
        console.log("about");
        this.setState({
            home: false,
            about: true,
            contact: false
        });
    }
    showContact(){
        console.log("contact");
        this.setState({
            home: false,
            about: false,
            contact: true
        });
    }
    showHome(){
        console.log("home");
        this.setState({
            home: true,
            about: false,
            contact: false
        });
    }
    render(){
        return(
            <div>
                <button onClick={this.showHome}>Home</button>
                <button onClick={this.showAbout}>About</button>
                <button onClick={this.showContact}>Contact Me</button>
                <div id="headerContent">
                    {this.state.home?<Home></Home>:null}
                    {this.state.about?<About></About>:null}
                    {this.state.contact?<Contact></Contact>:null}
                </div>
            </div>
        )
    }
}

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
      return(
          <div>
              <h1>Hello!</h1>
              <Puma></Puma>
              <Header></Header>
          </div>
      );
    }
}

export default App;
