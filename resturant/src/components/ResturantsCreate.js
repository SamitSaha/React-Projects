import React, { Component } from 'react'

export class ResturantsCreate extends Component {
  constructor(){
    super();
    this.state={
      name:null,
      email:null,
      author:null,
      id:null,
    }
  }
  create(){
    fetch('http://localhost:3000/resturant',{
      method:"POST",
      header:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((resp)=>{
        alert("Resturants has beeb added");
        console.warn(resp);
      })
    })
  }
  render() {
    return (
      <div>
        <h1>Resturants Create</h1>
        <div>
          <input type="text" onChange={(event)=>{this.setState({name:event.target.value}) }} placeholder="Resturant Name" /> <br /> <br />
          <input type="text" onChange={(event)=>{this.setState({email:event.target.value}) }} placeholder="Resturant Email" /> <br /> <br />
          <input type="text" onChange={(event)=>{this.setState({author:event.target.value}) }} placeholder="Resturant Author" /> <br /> <br />
          <input type="text" onChange={(event)=>{this.setState({id:event.target.value}) }} placeholder="Resturant id" /> <br /> <br />
          <button onClick={()=>{this.create()}}>ADD Resturant</button>
        </div>
      </div>
    )
  }
}

export default ResturantsCreate
