import React, { Component } from "react";
import axios from "axios";

class Users extends Component {
  state = {
    users: [],
    user: {}
  };

  userDelete = id => {
    fetch("http://localhost:3000/users/" + id, {
      method: "delete"
    });
    this.setState({
      users: this.state.users.filter(x => x.id !== id)
    });
  };
  componentDidMount() {
    let url = "http://localhost:3000/users";
    fetch(url)
      .then(resp => resp.json())
      .then(users => this.setState({ users: users }));

    //     // Now the state will be updated with the data received from response
  }
  postUser = () => {
    fetch("http://localhost:3000/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    })
      .then(resp =>
        resp.json({
          name: "id".val(),
          email: "email".val()
        })
      )
      .then(data => {
        console.log(data);
      });
  };

  render() {
    return (
      <div className="row">
        Users CRUD
        <div className="row">
          <div className="col-md-12">
            <form className="form">
              <input id="name" type="text" placeholder="enter your name" />
              <input id="email" type="text" placeholder="write your email" />

              <button
                onClick={() => this.postUser()}
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
                  <th>name</th>
                  <th>email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button className="btn btn-warning">Edit</button>
                      <button
                        onClick={() => this.userDelete(user.id)}
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
export default Users;
