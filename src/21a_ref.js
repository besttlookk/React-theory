import React, { Component } from 'react'

export default class Ref extends Component {
  
    onClick =()=>{
        alert('form submitted')
    }

    onKeyUp =(target, e)=>{
        if(e.keyCode === 13){
            switch(target){
                case 'firstName':
                    this.lastName.focus()
                    break;
                case 'lastName':
                    this.age.focus()
                    break;
                case 'age':
                    this.submit.focus()
                    break;
                default:
                    this.firstName.focus()
        
            }
        }
    }
    render() {
        return (
            <div>
                <input type='text' placeholder='Enter first name' ref={element => this.firstName = element} onKeyUp={this.onKeyUp.bind(this, 'firstName')}/><br /><br />
                <input type='text' placeholder='Enter last name' ref={element => this.lastName = element} onKeyUp={this.onKeyUp.bind(this, 'lastName')}/><br /> <br />
                <input type = 'text' placeholder='Enter age' ref={element => this.age = element} onKeyUp={this.onKeyUp.bind(this, 'age')} /><br /> <br />
                <button ref={element => this.submit = element} onKeyUp={this.onKeyUp.bind(this, 'submit')} onClick={this.onClick}>Submit</button>
            </div>
        )
    }
}
