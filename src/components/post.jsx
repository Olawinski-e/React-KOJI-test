import React, { Component } from "react";
import axios from "axios";
import "./post.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      title: "",
      body: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + this.state.id)
      .then((res) => {
        this.setState({ title: res.data.title });
        this.setState({ body: res.data.body });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errMsg: "Error retreiving data" });
      });
  }

  render() {
    const { id, title, body } = this.state;
    return (
      <div>
        <h1>Post n° {id}</h1>
        <h4>{title}</h4>
        <p>{body}</p>
        <Link to="/">
          <Button variant="primary">Back</Button>
        </Link>
      </div>
    );
  }
}

export default Post;
