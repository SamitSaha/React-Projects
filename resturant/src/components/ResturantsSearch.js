import React, { Component } from 'react'

export class ResturantsSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null,
      noData: false
    }
  }
  search(key) {
    console.warn(key);
    fetch("http://localhost:3000/resturant?q=" + key)
      .then((response) => response.json())  // Parse the response body to JSON
      .then((data) => {
        console.warn("Search results", data);
        if (data.length > 0) {
          this.setState({ searchData: data, noData: false });  // Update state with search data
        }
        else {
          this.setState({ noData: true, searchData:null });  // Update state with search data
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
        <input type="text" onChange={(event) => this.search(event.target.value)} placeholder="Search for a restaurant..." />
        <div>
          {
            this.state.searchData ?
              <div>
                {
                  this.state.searchData.map((item) => (
                    <div> {item.name} </div>
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
