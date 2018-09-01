import React, { Component } from "react";

class Categories extends Component {
  state = {
    categories: [],
    category: {}
  };

  categoryDelete = id => {
    fetch("http://localhost:3000/categories/" + id, {
      method: "delete"
    });
    this.setState({
      categories: this.state.categories.filter(x => x.id !== id)
    });
  };

  componentDidMount() {
    let url = "http://localhost:3000/Categories";
    fetch(url)
      .then(resp => resp.json())
      .then(categories => this.setState({ categories: categories }));

    //     // Now the state will be updated with the data received from response
  }
  // let data = {
  //   userId: this.state.userId,
  //   categoryId: this.state.categoryId
  // };

  postCategory = () => {
    fetch("http://localhost:3000/Categories", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    })
      .then(resp =>
        resp.json({
          id: "id".val(),
          name: "name".val()
        })
      )
      .then(data => {
        console.log(data);
      });
  };
  render() {
    return (
      <div className="row">
        Categories CRUD
        <div className="row">
          <div className="col-md-12">
            <form className="form">
              <input id="id" type="text" placeholder="enter id" />
              <input id="name" type="text" placeholder="enter cname" />

              <button
                onClick={() => this.postCategory()}
                type="submit"
                className="btn btn-success"
              >
                Add
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>id</th>
                  <th>categoryName</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.categories.map((category, index) => (
                  <tr key={index}>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td>
                      <button className="btn btn-warning">Edit</button>
                      <button
                        onClick={() => this.categoryDelete(category.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
