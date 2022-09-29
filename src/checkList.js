
import { Component } from "react";
import done from './done.jpg'

export class Checklist extends Component{
    state = {
        userInput: "",
        listClasses: []

    }

    onChangeEvent(e){
        this.setState({userInput: e})
        

    }

    addItem(input){
        if (input === ''){
            alert('Please enter classes')
        }
        else{
        let hwClasses = this.state.listClasses;
        hwClasses.push(input);
        this.setState({listClasses: hwClasses, userInput: ''})
    }
    }

    deleteItem(){
        let hwClasses = this.state.listClasses;
        hwClasses = [];
        this.setState({listClasses: hwClasses})
    }

    crossedWord(event){
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubbmit(e){
        e.preventDefault();

    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubbmit}>
            <div className="conteiner">
                <input type = 'text'
                 placeholder="What classes for tommorow?"
                 onChange = { (e) => {this.onChangeEvent(e.target.value)}} 
                 value = {this.state.userInput}/>
            </div>
            <div className="conteiner">
                <button className="btn-add" onClick={() => this.addItem(this.state.userInput)}>Add</button>
            </div>
            <div className="conteiner">
                <ul>
                    {this.state.listClasses.map((item, index) => (
                    <li onClick={this.crossedWord} key = {index}>
                        <img src = {done} width = '25px' alt = 'done'/>
                        {item}</li>
                    ))}
                    
                </ul>
            </div>
            <div className="conteiner">
                <button className="btn-delete" onClick={() => this.deleteItem(this.state.userInput)}>Delete</button>
            </div>
            </form>
            </div>
        )
    }

}
