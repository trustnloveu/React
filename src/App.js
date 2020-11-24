import React, { Component } from "react";
import config from "./config.json";
import httpService from "./services/httpService";

import logger from "./services/logService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {
    posts: [],
  };

  // method
  async componentDidMount() {
    const { data: posts } = await httpService.get(config.apiEndpoint);
    this.setState({ posts });
    // console.log(posts);
  }

  // property that you're setting to a function
  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await httpService.post(config.apiEndpoint, obj);
    // console.log(post);

    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  // PUT || PATCH
  //  entire post's collection (object)
  //  You need to include post's id in the URL
  handleUpdate = async (post) => {
    post.title = "UPDATED";
    await httpService.put(config.apiEndpoint + "/" + post.id, post);
    // await httpService.patch(config.apiEndpoint, { title: post.title });
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  // Delete
  handleDelete = async (post) => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });

    try {
      await httpService.delete(config.apiEndpoint + "/" + post.id);
    } catch (ex) {
      // console.log("HANDLE DELETE CATCH BLOCK");
      if (ex.response && ex.response.status === 404) {
        logger.log(ex);
        toast("This post has already been deleted.");
      }

      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
