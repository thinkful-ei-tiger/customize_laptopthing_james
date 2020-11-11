import React, { Component } from "react";
import "./FeatureOptions.css";
import slugify from "slugify";
import Currency from "../Currency";

export default class FeatureOptions extends Component {
  render() {
    const {
      itemHash,
      name,
      updateFeature,
      selected,
      featureOption,
      cost,
      item,
    } = this.props;
    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={slugify(name)}
          className="feature__option"
          name={slugify(name)}
          onChange={() => updateFeature(featureOption, item)}
          checked={name === selected[featureOption]}
        />
        <label htmlFor={slugify(name)} className="feature__label">
          {name} ({Currency.format(cost)})
        </label>
      </div>
    );
  }
}
