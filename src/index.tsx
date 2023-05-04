import React, { Component } from "react";
import PropTypes from "prop-types";

import type { NiceAvatarProps } from "./types"

import { genConfig, defaultOptions } from "./utils";

import Face from "./face/index";
import Hair from "./hair/index";
import Hat from "./hat/index";
import Ear from "./ear/index";
import Eyebrow from "./eyebrow/index";
import Eye from "./eyes/index";
import Glasses from "./glasses/index";
import Nose from "./nose/index";
import Mouth from "./mouth/index";
import Shirt from "./shirt/index";

export default class ReactNiceAvatar extends Component<NiceAvatarProps> {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    shape: PropTypes.string,
    sex: PropTypes.string,
    faceColor: PropTypes.string,
    earSize: PropTypes.string,
    hairColor: PropTypes.string,
    hairStyle: PropTypes.string,
    hatColor: PropTypes.string,
    hatStyle: PropTypes.string,
    hairColorRandom: PropTypes.bool,
    eyeStyle: PropTypes.string,
    glassesStyle: PropTypes.string,
    noseStyle: PropTypes.string,
    mouthStyle: PropTypes.string,
    shirtStyle: PropTypes.string,
    shirtColor: PropTypes.string,
    bgColor: PropTypes.string,
    isGradient: PropTypes.bool
  }

  render() {
    const { id, className, style, shape = "circle", hairColorRandom = false } = this.props;
    const config = genConfig(this.props);

    // Background shape
    let borderRadius;
    switch (shape) {
      case "circle": {
        borderRadius = "100%";
        break;
      }
      case "rounded": {
        borderRadius = "6px";
        break;
      }
      case "square": {
        borderRadius = 0;
        break;
      }
    }
    
    return (
      <div
        id={id}
        className={className}
        style={{
          background: config.bgColor,
          overflow: "hidden",
          borderRadius,
          ...style
        }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%"
          }}>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "90%"
            }}>
            <Face color={config.faceColor} />
            <Hat
              color={config.hatColor}
              style={config.hatStyle} />
            {config.hatStyle === "none" &&
              <Hair
                color={config.hairColor}
                style={config.hairStyle}
                colorRandom={hairColorRandom} />
            }

            {/* Face detail */}
            <div
              style={{
                position: "absolute",
                right: "-3%",
                top: "30%",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}>
              <Eyebrow style={config.eyeBrowStyle} />
              <Eye style={config.eyeStyle} />
              <Glasses style={config.glassesStyle} />
              <Ear color={config.faceColor} size={config.earSize} />
              <Nose style={config.noseStyle} />
              <Mouth style={config.mouthStyle} />
            </div>

            <Shirt color={config.shirtColor} style={config.shirtStyle} />
          </div>
        </div>
      </div>
    );
  }
}

export { genConfig } from "./utils";
