import { render } from "@testing-library/react";
import React, { Component } from "react";
import Origamis from "../../components/origamis";
import PageLayout from "../../components/page-layout";
import styles from "./index.module.css";

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      posts: null,
    };
  }

  getUser = async (id) => {
    const promise = await fetch(
      `https://origami-workshop-default-rtdb.firebaseio.com/${id}/autor/.json`
    );

    let user = await promise.json();

    console.log(user);
    this.setState({
      username: user.username,
      posts: user.posts.length,
    });
  };

  componentDidMount() {
    this.getUser(this.props.match.params.id);
  }
  render() {
    const { username, posts } = this.state;
    return (
      <PageLayout>
        <div>
          <p>User: {username}</p>
          <p>Posts: {posts}</p>
        </div>
        <Origamis countOrigamis={3} />
      </PageLayout>
    );
  }
}

export default ProfilePage;
