import React, { Component } from 'react'

export class Login extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            password:''
        }
    }
    login(){
        console.warn(this.state)
        fetch("http://localhost:3000/login?q=" + this.state.name)
          .then((response) => response.json())  // Parse the response body to JSON
          .then((data) => {
            console.warn("Search results", data);
            if(data.length > 0){
                localStorage.setItem('login', JSON.stringify(data));
                console.log(this.props.history.push('list'));
            }else{
                alert("please check username and password");
            }
          })
          .catch((error) => {
            console.error("Error fetching data:", error);  // Handle any errors
          });
    }
  render() {
    return (
      <div>
        <input type="text" name="user" onChange={(event)=>this.setState({name:event.target.value})} placeholder="Enter name" /> <br /><br />
        <input type="password" name="password" onChange={(event)=>this.setState({password:event.target.value})} placeholder="Enter password" /> <br /><br />
        <button onClick={()=>{this.login()}}>Login</button>
      </div>
    )
  }
}

export default Login
