import React, { Component } from 'react'

export class ResturantsList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
        fetch("http://localhost:3000/resturant").then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }
    render() {
        console.warn(this.state);
        return (
            <div>
                <h1>ResturantList</h1>
                {
                    this.state.list ?
                        <div>
                            {
                                this.state.list.map((item, i) =>
                                    <div className="list-wrapper">
                                        <span>{item.name}</span>
                                        <span>{item.author}</span>
                                        <span>{item.email}</span>
                                    </div>)
                            }
                        </div>
                        : <p>Please Wait...</p>
                }
            </div>
        )
    }
}

export default ResturantsList
