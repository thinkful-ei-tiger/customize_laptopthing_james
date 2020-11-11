import React, { Component } from "react";
import Feature from "../Feature/Feature";
import "./FeatureList.css";
import FEATURES from "../../STORE";

export default class FeaturesList extends Component {
  state = {
    features: FEATURES,
  };
  render() {
    return (
      <section className="main__form">
        <h2>Customize your laptop</h2>
        <Feature
          features={this.state.features}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
        />
      </section>
    );
  }
}
