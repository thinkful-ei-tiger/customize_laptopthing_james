import React, { Component } from "react";
import Summary from "../summary/summary";
import Total from "../total/total";
import "./cart.css";

export default class Cart extends Component {
  render() {
    return (
      <section className="main__summary">
        <h3>Your Cart</h3>
        <Summary selected={this.props.selected} />
        <Total selected={this.props.selected} />
      </section>
    );
  }
}
