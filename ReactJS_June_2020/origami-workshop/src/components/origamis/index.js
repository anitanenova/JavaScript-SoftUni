import React, { Component } from "react";
import Origam from "../../components/origam";
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

    let origamis = await promise.json();

    origamis = Object.values(origamis);
    this.setState({
      origamis,
    });
  };

  renderOrigamis(countOrigamis) {
    const { origamis } = this.state;

    if (countOrigamis != "all") {
      if (origamis.length > 0) {
        origamis.splice(countOrigamis);
      }
    }

    return origamis.map((origam, index) => {
      return <Origam key={origam.id} index={index} {...origam} />;
    });
  }

  componentDidMount() {
    this.getOrigamis();
  }

  render() {
    return (
      <div className={styles["origamis-wrapper"]}>
        {this.renderOrigamis(this.props.countOrigamis)}
      </div>
    );
  }
}

export default Origamis;
