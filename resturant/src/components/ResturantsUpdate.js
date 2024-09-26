import React, { Component } from 'react'

export class ResturantsUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      author: null,
      id: null,
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/resturant/' + this.props.match.params.id).then((response) => {
      response.json().then((result) => {
        console.warn(result)
        this.state({
          name: result.name,
          email:result.email,
          id:result.id,
          author:result.author
        })
      })
    })
  }
  update(){
    fetch('http://localhost:3000/resturant/'+this.state.id,{
      method:"PUT",
      header:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((resp)=>{
        alert("Resturants has beeb updated");
        console.warn(resp);
      })
    })
  }
  render() {
    // console.warn(this.props.match.params.id)
    return (
      <div>
        <h1>Resturant Update</h1>
        <div>
          <input type="text" onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="Resturant Name" value={this.state.name} /> <br /> <br />
          <input type="text" onChange={(event) => { this.setState({ email: event.target.value }) }} placeholder="Resturant Email" value={this.state.email} /> <br /> <br />
          <input type="text" onChange={(event) => { this.setState({ author: event.target.value }) }} placeholder="Resturant Author" value={this.state.author} /> <br /> <br />
          <input type="text" onChange={(event) => { this.setState({ id: event.target.value }) }} placeholder="Resturant id" value={this.state.id} /> <br /> <br />
          <button onChange={() => { this.update() }}>Update Resturant</button>
        </div>
      </div>
    )
  }
}

export default ResturantsUpdate
