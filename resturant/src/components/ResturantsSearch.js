import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Table, Form, Container } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export class ResturantsSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null,
      noData: false
    }
  }
  delete(id) {
    fetch("http://localhost:3000/resturant/" + id, {
      method: "DELETE"
    }).then((result) => {
      result.json().then((resp) => {
        alert("Resturants has beeb Deleted");
        this.search(this.state.lastSearch);
      })
    })
  }
  search(key) {
    console.warn(key);
    this.setState({ lastSearch: key })
    fetch("http://localhost:3000/resturant?q=" + key)
      .then((response) => response.json())  // Parse the response body to JSON
      .then((data) => {
        console.warn("Search results", data);
        if (data.length > 0) {
          this.setState({ searchData: data, noData: false });  // Update state with search data
        }
        else {
          this.setState({ noData: true, searchData: null });  // Update state with search data
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);  // Handle any errors
      });
  }
  render() {
    return (
      <div>
        <h1>ResturantsSearch</h1>
        <input type="text" placeholder="Search for a restaurant..." />
        <Form.Control type="password" onChange={(event) => this.search(event.target.value)} placeholder="Password" />
        <div>
          {
            this.state.searchData ?
              <div>
                {
                  this.state.searchData.map((item) => (
                    <Container>
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
                            <tr>
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.author}</td>
                              <td>{item.email}</td>
                              <td><Link to={"/update/" + item.id}><FontAwesomeIcon icon={faEdit} color="orange" /></Link></td>
                              <td><span onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /></span></td>
                            </tr>
                          }
                        </tbody>
                      </Table>
                    </Container>
                  ))
                }
              </div>
              : ""
          }
          {
            this.state.noData ?
              <h3>No Data Warning</h3>
              : ""
          }
        </div>
      </div>
    )
  }
}

export default ResturantsSearch
