import React, { Component } from 'react';
import './Card.css';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
import axios from 'axios';


let data =[
]
const CardList = (props) => {
    return (
        <div>
          {props.cards.map(card => <Card {...card}/>)}
        </div>
    );
};

const Card = (props) => {
    return(
        <div className="card">
        <img src={props.avatar_url}/>
        <div className="cardText">
            <div className="nameDiv">{props.name}</div>
            <div> {props.company}</div>
            </div>
        </div>
    );
} 

class Form extends React.Component{
    state={
        userName:''
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Event:Form Submitted",this.state.userName);
        axios.get(`https://api.github.com/users/{this.state.userName}`).
        then(resp=>console.log(resp))
    };
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Github Username" value={this.state.userName} 
                onChange={(event)=>this.setState({userName: event.target.value})}/>
                <button type="submit">Add Card</button>
            </form>
        )
    }
}
class FormApp extends React.Component{
    state = {
        cards:[
{
    name:"pjhyett",
    company:"Facebook",
    avatar_url:"https://avatars0.githubusercontent.com/u/3?v=4"
},
{
    name:"defunkt",
    company:"Facebook",
    avatar_url:"https://avatars0.githubusercontent.com/u/2?v=4"
},
{
    name:"wycats",
    company:"Facebook",
    avatar_url:"https://avatars0.githubusercontent.com/u/4?v=4"
}
        ]
    }
    render(){
        return(
            <div>
            <Form onSubmit={this.addNewCard}/>
            <CardList cards={this.state.cards}/>
            </div>
        )
    }
}
export default FormApp;