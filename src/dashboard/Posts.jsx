import React, { Component } from "react";
import axios from "axios";

class Posts extends Component {
  state = {
    posts: [],
    post: {}
  };

  postDelete = id => {
    fetch("http://localhost:3000/posts/" + id, {
      method: "delete"
    });
    this.setState({
      posts: this.state.posts.filter(x => x.id !== id)
    });
  };

  componentDidMount() {
    let url = "http://localhost:3000/posts";
    fetch(url)
      .then(resp => resp.json())
      .then(posts => this.setState({ posts: posts }));

    //     // Now the state will be updated with the data received from response
  }
  // let data = {
  //   userId: this.state.userId,
  //   categoryId: this.state.categoryId
  // };

  postPost = () => {
    fetch("http://localhost:3000/posts", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    })
      .then(resp =>
        resp.json({
          userid: "userid".val(),
          categoryid: "categoryid".val(),
          title: "title".val(),
          body: "body".val()
        })
      )
      .then(data => {
        console.log(data);
      });
  };
  render() {
    return (
      <div className="row">
        Posts CRUD
        <div className="row">
          <div className="col-md-12">
            <form className="form">
              <input id="userid" type="text" placeholder="enter userid" />
              <input id="categoryid" type="text" placeholder="enter cid" />
              <input id="title" type="text" placeholder="write your title" />
              <input id="body" type="text" placeholder="write your post" />

              <button
                onClick={() => this.postPost()}
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
                  <th>userId</th>
                  <th>categoryId</th>
                  <th>title</th>
                  <th>body</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.posts.map((post, index) => (
                  <tr key={index}>
                    <td>{post.id}</td>
                    <td>{post.userId}</td>
                    <td>{post.categoryId}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td>
                      <button className="btn btn-warning">Edit</button>
                      <button
                        onClick={() => this.postDelete(post.id)}
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

export default Posts;
