import React, { Component } from "react";
import Origam from "../origam";
import styles from "./index.module.css";
class Origamis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origamis: [],
    };
  }

  getOrigamis = async () => {
    const promise = await fetch(
      "https://origami-workshop-default-rtdb.firebaseio.com/.json"
    );

    const origamis = await promise.json();

    this.setState({
      origamis,
    });
  };

  renderOrigamis() {
    const { origamis } = this.state;
    return Object.values(origamis).map((origam, index) => {
      return <Origam key={origam.id} index={index} {...origam} />;
    });
  }

  componentDidMount() {
    this.getOrigamis();
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Origamis</h1>
        <div className={styles["origamis-wrapper"]}>
          {this.renderOrigamis()}
        </div>
      </div>
    );
  }
}

export default Origamis;
