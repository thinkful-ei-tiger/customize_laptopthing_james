import React, { Component } from "react";
import Summary from "../Summary/Summary";
import Total from "../Total/Total";
import "./Cart.css";

export default class Cart extends Component {
  render() {
    const { selected } = this.props;
    const summary = Object.keys(selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = selected[feature];
      return (
        <Summary
          key={featureHash}
          featureHash={featureHash}
          feature={feature}
          selectedOption={selectedOption}
        />
      );
    });

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <Total selected={this.props.selected} />
      </section>
    );
  }
}
