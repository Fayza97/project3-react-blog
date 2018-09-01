import React, { Component } from "react";

class Comments extends Component {
  state = {
    comments: [],
    comment: {}
  };

  commentDelete = id => {
    fetch("http://localhost:3000/comments/" + id, {
      method: "delete"
    });
    this.setState({
      comments: this.state.comments.filter(x => x.id !== id)
    });
  };

  componentDidMount() {
    let url = "http://localhost:3000/comments";
    fetch(url)
      .then(resp => resp.json())
      .then(comments => this.setState({ comments: comments }));

    //     // Now the state will be updated with the data received from response
  }

  postComment = () => {
    fetch("http://localhost:3000/comments", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    })
      .then(resp =>
        resp.json({
          id: "id".val(),
          userId: "userId".val(),
          postId: "postId".val(),
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
        comments CRUD
        <div className="row">
          <div className="col-md-12">
            <form className="form">
              <input id="id" type="text" placeholder="enter id" />
              <input id="userid" type="text" placeholder="enter userid" />
              <input id="postid" type="text" placeholder="write your postid" />
              <input id="body" type="text" placeholder="write your post" />

              <button
                onClick={() => this.postComment()}
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
                  <th>postId</th>
                  <th>body</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.comments.map((comment, index) => (
                  <tr key={index}>
                    <td>{comment.id}</td>
                    <td>{comment.userId}</td>
                    <td>{comment.postId}</td>
                    <td>{comment.body}</td>
                    <td>
                      <button className="btn btn-warning">Edit</button>
                      <button
                        onClick={() => this.commentDelete(comment.id)}
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

export default Comments;
