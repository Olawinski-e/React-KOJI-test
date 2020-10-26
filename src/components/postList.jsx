import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      errMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => this.setState({ list: res.data }))
      .catch((err) => {
        console.log(err);
        this.setState({ errMsg: "Error retreiving data" });
      });
  }

  render() {
    const { list, errMsg } = this.state;
    return (
      <div>
        <h2>List of posts</h2>
        {list.length
          ? list.map((item) => (
              <div key={item.id}>
                <Link to={() => `/item/${item.id}`}>{item.title}</Link>
              </div>
            ))
          : null}
        {errMsg ? <div>{errMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
