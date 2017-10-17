import React, { Component } from 'react';
/*import logo from './logo.svg';*/
//import './App.css';

class App extends React.Component {
constructor(){
  super();
  this.state = {
    txt: 'this is the state text',
    cat: 0,
    counter:1
  }
}
incrementCounter = (incrementValue) =>{
  this.setState((prevState)=>({
    counter: prevState.counter+incrementValue
  }))
}
update(e){
  this.setState({
    txt:e.target.value
  })
}
render() {
    let txt=this.props.txt;
    let cat=this.props.cat;
    return (
      <div className="App">
          <h1 className="App-title">Welcome to React</h1>
          <p>Hello World</p>
          <p>{txt}{cat}</p>
          <p>{this.state.txt}-{this.state.cat}</p>
         <Widget update={this.update.bind(this)}/>
         <Widget update={this.update.bind(this)}/>
         <Button>I <Heart/> React</Button>
         <Title text="123"/>
         <Quiz books={['Ramayana','Mahabharatha']}></Quiz>
         <Book></Book>
         <Text></Text>
         <Button2 incrementValue={1} onClickFunction={this.incrementCounter}/>
         <Button2 incrementValue={5} onClickFunction={this.incrementCounter}/>
         <Button2 incrementValue={10} onClickFunction={this.incrementCounter}/>
         <Result counter={this.state.counter}/>
      </div>
    );
  }

}

App.propTypes = {
  //txt: React.propTypes.string,
 // cat: React.propTypes.number.isRequired
}

App.defaultProps = {
  txt:"this is default text"
}

const Widget = (props) => <input type="text" onChange={props.update}/>
const Button = (props) => <button>{props.children}</button>
class Heart extends React.Component{
  render(){
    return <span>&hearts;</span>
  }
}
const Title = (props) => <p>Title: {props.text}</p>
Title.PropTypes = {
  text(props,propName,component){
    if(!(propName in props)){
      return new Error(`missing ${propName}`)
    }
    if(props[propName].length < 6){
      return new Error(`${propName} is too short`)
    }
  }
}

/*Quiz*/
class Quiz extends React.Component{
  propTypes:{
    books: React.PropTypes.array.isRequired
  }
  render(){
    return <div>{this.props.books.map(function(b){
            return <Book title={b} />;
    })}
    </div>;
  }
}
class Book extends React.Component{
  propTypes: {
    title: React.PropTypes.string.isRequired
  }
  render(){
    return <div><h4>{this.props.title}</h4></div>
  }
}
class Text extends React.Component{
  propTypes:{
    content: React.PropTypes.string.isRequired,
    b:React.PropTypes.number.isRequired
  }
  render(){
    var styles = {
     color: 'red' ,//this.props.foregroundColor,
      backgroundColor: 'green'//this.props.backgroundColor
   };
    return <p style = {styles}>{this.props.content}</p>
  }
}
Text.defaultProps = {
  /* styles : [{
    color: 'red' ,//this.props.foregroundColor,
    backgroundColor: 'green'
  }]*/
  content: "Text is coming from default props",
 b:5
}

class Button2 extends React.Component{
  
/* handleClick = () => {
   this.setState((prevState) => ({
     counter: prevState.counter +1
   }));
 };*/
 handleClick = () => {
   this.props.onClickFunction(this.props.incrementValue);
 };
  render(){
    return <button onClick={this.handleClick}>+{this.props.incrementValue}</button>
  }
}
const Result = (props) => {
  
    return (<div>{props.counter}</div>)
    
 
  
}
export default App;
