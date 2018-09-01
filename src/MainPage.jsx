import React, { Component } from "react";
import axios from "axios";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Col,
  Row,
  Button
} from "reactstrap";

const url = "http://localhost:3000";
class MainPage extends Component {
  state = {
    categories: [],
    posts: [],
    comments: [],
    modalOpen: false
  };

  toggle = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };
  componentDidMount() {
    axios.get(url + "/posts").then(res => {
      this.setState({
        posts: res.data
      });
    });
    axios.get(url + "/categories").then(res => {
      this.setState({
        categories: res.data
      });
    });
    axios.get(url + "/comments").then(res => {
      this.setState({
        comments: res.data
      });
    });
  }

  render() {
    return (
      <Row>
        {/* <Col md={12}> is same as <div className="col-md-12">  */}
        <div className="col-md-12">Main Page</div>

        <Col md={12}>
          <Button color="success" onClick={this.toggle}>
            Toggle Modal
          </Button>
        </Col>

        <Col md={12}>
          <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>You may use form here :)</ModalBody>
            <ModalFooter>
              <div>Footer</div>
              <Button color="primary" onClick={this.toggle}>
                Do Something
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </Col>
      </Row>
    );
  }
}

export default MainPage;
