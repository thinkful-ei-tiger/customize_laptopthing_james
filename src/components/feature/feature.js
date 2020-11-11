import React, { Component } from "react";
import FeatureOption from "../FeatureOptions/FeatureOptions";
import "./Feature.css";
import slugify from "slugify";

export default class Feature extends Component {
  render() {
    const features = this.props.features;

    const featureList = Object.keys(features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;

      const options = features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <FeatureOption
            item={item}
            key={itemHash}
            itemHash={itemHash}
            name={item.name}
            selected={this.props.selected}
            updateFeature={this.props.updateFeature}
            featureOption={feature}
            cost={item.cost}
          />
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });
    return featureList;
  }
}
