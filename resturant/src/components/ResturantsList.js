import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export class ResturantsList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
        this.getFetch()
    }
    getFetch(){
        fetch("http://localhost:3000/resturant").then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }
    delete(id) {
        // alert("Delete");
        fetch("http://localhost:3000/resturant/" + id, {
            method: "DELETE"
        }).then((result) => {
            result.json().then((resp) => {
                alert("Resturants has beeb Deleted");
                this.getFetch();
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
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Author</th>
                                        <th>Email</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>
                                            // <div className="list-wrapper">
                                            //<span>{item.name}</span>
                                            // <span>{item.author}</span>
                                            // <span>{item.email}</span>
                                            // </div>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.author}</td>
                                                <td>{item.email}</td>
                                                <td><Link to={"/update/" + item.id}><FontAwesomeIcon icon={faEdit} color="orange" /></Link></td>
                                                <td><span onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /></span></td>
                                            </tr>)
                                    }
                                </tbody>
                            </Table>
                        </div>
                        : <p>Please Wait...</p>
                }
            </div>
        )
    }
}

export default ResturantsList
